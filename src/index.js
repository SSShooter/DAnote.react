import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import Route from './router/'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Route />, document.getElementById('root'))
registerServiceWorker()
