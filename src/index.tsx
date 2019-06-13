import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import './index.scss'

interface AppState {
  temperature: number,
  himidity: number
}
class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      temperature: 0,
      himidity: 0,
    }
  }
  componentDidMount() {
    // throw new Error("don't allowed into the component")
    console.log('当前环境是', process.env.NODE_ENV)
    // fetch('/weather')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(weatherJson => {
    //     this.setState({...this.state, ...weatherJson})
    //   })
  }
  render() {
    return <div>
     <h2 className="title">hello， 这是一个react应用</h2>
     <p className="content">react 是一个mvvm 框架</p>
     <div>
        <h3>江西天气预报</h3>
        <p>温度: {this.state.temperature} </p>
        <p>湿度: {this.state.himidity}</p>
     </div>
    </div>
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)