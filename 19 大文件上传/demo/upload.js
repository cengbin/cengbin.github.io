const DOMAIN_NAME = `http://local.xxx.com:8001`

var myWorker = new Worker('./worker.js')
var uploadId = null
var resourceKey = null
var currentNumber = 0
var totalNumber = 0

export default async function upload(files) {
  files = Array.from(files)

  for (var i = 0; i < files.length; i++) {
    console.time('文件上传时间')

    var index = i
    var file = files[i]
    console.group("第", index, "个文件 ")
    console.log(file)
    console.log("文件名:", file.name)
    console.log("文件大小:", file.size, 'b ', file.size / 1024, 'kb ', file.size / 1024 / 1024, 'mb')
    console.log("文件类型:", file.type)
    console.log("文件的最后修改时间:", file.lastModifiedDate)
    console.groupEnd()

    /**
     * 1、获取文件的hash
     * */
    console.group("第一步（获取文件的hash）")
    var hash = resourceKey = await getHash(file)
    console.log("hash=", hash)
    console.groupEnd()

    /**
     * 2、根据当前文件hash判断文件是否上传过
     *    > 上传过则直接返回文件url
     *    > 反之则继续分片上传
     * */
    console.group("第二步（根据当前文件hash判断文件是否上传过）")
    var fileRecord = getFileRecords().find(record => record.hash === hash)
    console.log("fileRecord=", fileRecord)
    if (fileRecord && fileRecord.done) {
      if (fileRecord.address) {
        console.timeEnd('文件上传时间')
        console.groupEnd()
        return fileRecord.address
      } else {
        // 获取资源地址
        var addressResult = await ajax({
          url: `${DOMAIN_NAME}/api/file/address`,
          type: "GET",
          data: {
            resourceKeys: resourceKey
          }
        })
        if (addressResult.code === '0000') {
          fileRecord.address = addressResult.data[hash]
          setFileRecords(fileRecord)
        }
        console.timeEnd('文件上传时间')
        console.groupEnd()
        return fileRecord.address
      }
    }
    console.groupEnd()

    /**
     * 3、初始化分片上传，获取文件的uploadId getUploadId
     * */
    console.group("第三步（初始化分片上传，获取文件的uploadId）")
    if (fileRecord && fileRecord.uploadId) {
      uploadId = fileRecord.uploadId
    } else {
      await ajax({
        url: `${DOMAIN_NAME}/api/file/initMultipart`,
        type: "POST",
        data: {
          resourceKey,
        }
      }).then(({code, data, message}) => {
        if (code === '0000') {
          uploadId = data.uploadId
          fileRecord = {
            hash,
            uploadId,
            done: false,
            address: ""
          }
          addFileRecords(fileRecord)
        }
      })
    }
    console.log(`uploadId=${uploadId}`)
    console.groupEnd()

    /**
     * 4、通过uploadId获取已上传的分片 getMultipart
     * */
    console.group("第四步（通过uploadId获取已上传的分片 getMultipart）")
    let multipart = await ajax({
      url: `${DOMAIN_NAME}/api/file/multipar`,
      type: "GET",
      data: {
        resourceKey: resourceKey,
        uploadId: uploadId,
        maxParts: 1000,
        partNumberMarker: 0,
      }
    }).then(({code, data, message}) => {
      if (code === '0000') {
        return data
      }
    })
    currentNumber += multipart.parts.length
    console.log(multipart.parts)
    console.groupEnd()

    // 5、剔除掉已上传的分片数据，生成上传异步队列
    console.group("第五步（剔除掉已上传的分片数据，生成上传异步队列）")
    let fileSize = file.size
    let chunkSize = 1 * 1024 * 1024 // 1mb
    let chunkNumber = Math.ceil(fileSize / chunkSize)
    let chunks = []
    let queue = []
    totalNumber = chunkNumber
    for (let i = 0; i < chunkNumber; i++) {
      let bo = multipart.parts.some(item => item.partNumber === (i + 1))
      if (bo) {
        continue
      } else {
        let start = i * chunkSize
        let end = start + chunkSize
        // console.log(file.name, i, buffers.slice(start, end))
        let blob = file.slice(start, end)
        // console.log(blob)
        let chunk = {
          file: blob,
          fileName: file.name,
          chunkIndex: i + 1,
          chunkSize: blob.size,
          chunkNumber: chunkNumber,
          resourceKey,
          uploadId,
        }

        let formData = new FormData()
        Object.keys(chunk).forEach(key => formData.append(key, chunk[key]))
        queue.push(function (next) {
          ajax({
            url: `${DOMAIN_NAME}/api/file/multipartUpload`,
            type: "POST",
            data: formData,
            xhrFields: {
              // 必须为true才能带上cookie
              withCredentials: true
            },
            // 必须false才会自动加上正确的Content-Type
            contentType: false,
            // 必须false才会避免jQuery对FormData的默认序列化处理
            processData: false,
            success: function (res) {
              console.log(`/api/file/multipartUpload success: 当前第${chunk.chunkIndex}块切片,总共${totalNumber}块切片,已上传${Number(currentNumber / totalNumber * 100).toFixed(2)}%`)
              if (res.code === '0000') {
                currentNumber++
                res.data.partNumber = chunk.chunkIndex
                next(res.data)
              }
            },
            error: function (err) {
              console.log('error', err)
            }
          })
        })

        chunks.push(chunk)
      }
    }
    console.log(chunks)
    console.groupEnd()

    // 6、异步队列分片上传
    console.group("第六步（异步队列分片上传）")
    var uploadResult = await runQueue(queue, iterator)
    console.log(uploadResult)
    console.groupEnd()

    // 7、完成分片上传
    console.group("第七步（完成分片上传）")
    await ajax({
      url: `${DOMAIN_NAME}/api/file/completeMultipart`,
      type: "POST",
      data: {
        resourceKey,
        uploadId,
        parts: uploadResult.map(({etag, partNumber}) => ({etag, partNumber})),
      }
    })

    fileRecord.done = true
    setFileRecords(fileRecord)
    console.groupEnd()

    // 8、获取文件地址
    console.group("第八步（获取文件地址）")
    var addressResult = await ajax({
      url: `${DOMAIN_NAME}/api/file/address`,
      type: "GET",
      data: {
        resourceKeys: resourceKey
      }
    })
    if (addressResult.code === '0000') {
      fileRecord.address = addressResult.data[hash]
      setFileRecords(fileRecord)
    }
    console.log(fileRecord.address)
    console.groupEnd()

    console.timeEnd('文件上传时间')
  }
}

async function getHash(file) {
  return new Promise((resolve, reject) => {
    var listener = function (event) {
      console.group('upload.js -> on message event')
      console.log('type :', event.type)
      console.log('data :', event.data)
      console.groupEnd()
      var hash = event.data
      resolve(hash)
      myWorker.removeEventListener("message", listener)
    }
    myWorker.addEventListener('message', listener)

    myWorker.postMessage(file)
  })
}

async function ajax(option) {
  return $.ajax(option)
}

function getFileRecords() {
  return JSON.parse(window.localStorage.getItem('fileRecords') || `[]`)
}

function addFileRecords(record) {
  var fileRecords = getFileRecords()
  fileRecords.push(record)
  window.localStorage.setItem("fileRecords", JSON.stringify(fileRecords))
  return fileRecords
}

function setFileRecords(record) {
  var fileRecords = getFileRecords()
  var res = fileRecords.find(item => item.hash === record.hash)
  if (res) {
    Object.keys(res).forEach((key) => {
      if (record.hasOwnProperty(key)) {
        res[key] = record[key]
      }
    })
  }
  window.localStorage.setItem("fileRecords", JSON.stringify(fileRecords))
  return fileRecords
}

function runQueue(queue, fn, cb) {
  return new Promise((resolve, reject) => {
    let arr = []
    const step = index => {
      if (index >= queue.length) {
        cb && cb(arr)
        resolve(arr)
      } else {
        if (queue[index]) {
          fn(queue[index], (data) => {
            arr[index] = data
            step(index + 1)
          })
        } else {
          arr[index] = queue[index]
          step(index + 1)
        }
      }
    }
    step(0)
  })
}

function iterator(hook, next) {
  try {
    hook((data) => {
      next(data)
    })
  } catch (e) {

  }
}