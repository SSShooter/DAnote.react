import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import AppBar from './components/AppBar/AppBar'
// import MainPage from './router/index'
import registerServiceWorker from './registerServiceWorker'

import home from '@/views/home/home'
import tags from '@/views/tags/tags'
// import Divider from '../node_modules/_material-ui@1.0.0-beta.29@material-ui/Divider/Divider'
const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <AppBar />
//           <Route path="/" exact component={Home} />
//           <Route path="/tags" component={About} />
//         </div>
//       </Router>
//     )
//   }
// }

const App = () => (
  <Router>
    <div>
      <AppBar />
      <Route path="/" exact component={home} />
      <Route path="/tags" component={tags} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
