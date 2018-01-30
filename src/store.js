import { observable } from 'mobx'

export default class Store {
  @observable
  todos = [
    {
      title: 'todo标题',
      done: false
    }
  ]
  @observable tags = []
}
