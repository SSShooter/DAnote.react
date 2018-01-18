import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom'
import AppBar from './components/AppBar/AppBar'
import MainPage from './router/index'
import registerServiceWorker from './registerServiceWorker'


class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
