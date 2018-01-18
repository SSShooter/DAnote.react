import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import home from '@/views/home/home'
import tags from '@/views/tags/tags'
import star from '@/views/star/star'
import newMemo from '@/views/newMemo/newMemo'

export default class RouteConfig extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={home} />
        <Route path="/tags" exact component={tags} />
        <Route path="/star" exact component={star} />
        <Route path="/new" exact component={newMemo} />
      </div>
    )
  }
}
