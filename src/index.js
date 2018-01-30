import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import AppBar from './components/AppBar/AppBar'
import MainPage from './router/index'
import registerServiceWorker from './registerServiceWorker'

import Store from './store'
import { observer } from 'mobx-react'

@observer
class App extends React.Component {
  componentDidMount = () =>{
    console.log(this.props.store)
  }
  render() {
    return (
      <Router>
        <div>
          <AppBar />
          <MainPage />
        </div>
      </Router>
    )
  }
}

const store = new Store()
ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
