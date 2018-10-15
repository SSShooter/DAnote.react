import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import AppBar from './components/AppBar/AppBar'
import MainPage from './router/index'
import registerServiceWorker from './registerServiceWorker'

import store from './store'
import { observer, Provider } from 'mobx-react'

import DevTools from 'mobx-react-devtools'

@observer
class App extends React.Component {
  componentDidMount = () => {
    // console.log(this.props.store)
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <AppBar />
          <MainPage />
          <DevTools />
        </React.Fragment>
      </Router>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
