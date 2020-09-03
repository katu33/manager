import React from 'react'
import {Route} from "react-router-dom";
function PublicRoute({ component: Component, path }) {
    return (
        <Route path={path} component={Component} />
    )
}

export default PublicRoute
