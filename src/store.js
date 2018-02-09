import { observable } from 'mobx'

class Store {
  @observable
  todos = [
    {
      title: 'todo标题',
      done: false
    }
  ]
  @observable tags = ['ei']
}

let store = new Store()
export default store