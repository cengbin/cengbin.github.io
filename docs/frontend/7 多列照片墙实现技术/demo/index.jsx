class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnMaxHeight: 0,
      imageList: [],
    }
  }

  componentDidMount() {
    let {columnCount, columnWidth, columnGap} = calculate()

    this.columnGap = columnGap
    this.columnCount = columnCount
    this.columnWidth = columnWidth
    this.columnHeightArr = Array.apply(null, {length: this.columnCount}).map(() => 0)

    let arr = [
      './imgs/229323942_834978387132102_4129135032380312924_n.jpeg',
      './imgs/260275992_443951064017388_8120694513404601001_n.jpeg',
      './imgs/279928391_964488074221469_6104304098134337017_n.jpeg',
      './imgs/310812091_1108728969758021_1027002061431010457_n.jpeg',
      './imgs/314929026_818925446058506_7024881548225654245_n.jpeg',
      './imgs/315894396_187630870504862_4616335074465432266_n.jpeg',
      './imgs/316029231_111158778379978_7320176015818593328_n.jpeg',
      './imgs/321284368_709465150535803_6365083911674404453_n.jpeg',
      './imgs/321706556_919666395885228_1046310628334209128_n.jpeg',
      './imgs/321821533_745215853602141_8389795013703335073_n.jpeg',
      './imgs/321992406_1225826614636485_8097102520988187675_n.jpeg',
    ]
    this.load(arr)
  }

  async load(arr) {
    for (let i = 0; i < arr.length; i++) {
      let url = arr[i]
      let image = await asyncLoadImage(url).catch(err => {
        console.log('err 加载图片错误：', url, err)
      })

      if (!image) return

      let finalHeight = (this.columnWidth) / (image.width / image.height) + this.columnGap
      // console.log(image.width, image.height, finalHeight)

      let min = Math.min(...this.columnHeightArr)
      let minIndex = this.columnHeightArr.indexOf(min)

      let item = {
        url,
        image,
        top: min,
        left: minIndex * (this.columnWidth + this.columnGap),
      }

      this.columnHeightArr[minIndex] = min + finalHeight

      this.setState({
        columnMaxHeight: Math.max(...this.columnHeightArr),
        imageList: this.state.imageList.concat(item)
      })
    }
  }

  render() {
    return (<div className="list" style={{height: this.state.columnMaxHeight + 'px'}}>
      {
        this.state.imageList.map((item, idx) => {
          return (<div className="list-item" style={{
            width: this.columnWidth + "px",
            left: item.left + 'px',
            top: item.top + 'px'
          }} key={idx}>
            <img src={item.url}/>
          </div>)
        })
      }
    </div>)
  }
}

function asyncLoadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = url
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (err) => {
      // console.log(err)
      reject(err)
    }
  })
}

function calculate() {
  let columnCount = 3
  let columnGap = 5
  let columnWidth = (window.innerWidth - 10 - ((columnCount - 1) * columnGap)) / columnCount

  return {
    columnCount,
    columnGap,
    columnWidth
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)