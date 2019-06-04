import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  render() {
    return <h2>hello， 这是一个react应用</h2>
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)