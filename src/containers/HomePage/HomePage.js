import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Header from '../../components/Header'

@inject('Store')
@observer
class HomePage extends Component {
    state = {  }
    render() {
        const { userName } = this.props.Store
        return (
            <div>
                <h1>{userName}</h1>
                <Header />
            </div>
        )
    }
}

export default HomePage