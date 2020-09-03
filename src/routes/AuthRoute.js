import React from 'react'
import {Route} from "react-router-dom";
function AuthRoute({ component: Component, path, exact }) {
    return (
        <Route path={path} exact={exact} component={Component} /> 
    )
}

export default AuthRoute
