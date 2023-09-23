importScripts('./spark-md5.min.js')

self.onmessage = function (event) {
  console.group('worker.js -> on message event')
  console.log('type :', event.type)
  console.log('data :', event.data)
  console.groupEnd()

  var file = event.data
  var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
    chunkSize = 10 * 1024 * 1024, // Read in chunks of 2MB
    chunks = Math.ceil(file.size / chunkSize),
    currentChunk = 0,
    spark = new SparkMD5.ArrayBuffer(),
    fileReader = new FileReader()

  fileReader.onload = function (e) {
    console.log('read chunk nr', currentChunk + 1, 'of', chunks)
    spark.append(e.target.result)                   // Append array buffer
    currentChunk++

    if (currentChunk < chunks) {
      loadNext()
    } else {
      var hash = spark.end()
      console.log('finished loading')
      console.info('computed hash', hash)  // Compute hash
      self.postMessage(hash)
    }
  }

  fileReader.onerror = function (err) {
    console.warn('oops, something went wrong.')
    reject(err)
  }

  function loadNext() {
    var start = currentChunk * chunkSize,
      end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize

    fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
  }

  loadNext()
}