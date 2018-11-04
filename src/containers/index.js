import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { Provider } from "mobx-react"
import store from "./store"
import routes from '../config/routerConfig/routes'

@withRouter
class Containers extends Component {
  render() {
    return (
      <Provider Store={store}>
        <Switch>
        {routes.map((item,i)=>
            <Route key={i} path={item.path} component={item.component} exact/>
        )}
        </Switch>
      </Provider>
    )
  }
}

export default Containers