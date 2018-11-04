import { observable } from 'mobx'

class Store {
    @observable userName = 'hukun'
}

export default new Store()