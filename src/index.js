import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index.scss'

class App extends React.Component {
  render() {
    
     
    return <div>
     <h2 className="title">hello， 这是一个react应用</h2>
     <p class="content">react 是一个mvvm 框架</p>
    </div>
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)