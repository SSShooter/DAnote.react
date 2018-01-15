import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import home from '@/views/home'
// const record = () => import("@/pages/record/record")
// const helpcenter = () => import("@/pages/helpcenter/helpcenter")
// const production = () => import("@/pages/production/production")
// const balance = () => import("@/pages/balance/balance")

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={home} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}
