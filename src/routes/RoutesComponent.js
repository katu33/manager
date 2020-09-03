import React from 'react';
import routes from './index';
import AuthRoute from './AuthRoute';
import PublicRoute from './PublicRoute';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
function RoutesComponent() {
    return (
        <Router>
            <Switch>    
                {routes.authRoutes.map(route => (
                    <AuthRoute 
                        key={route.path}
                        exact 
                        path={route.path} 
                        component={React.lazy(route.loader)}
                    />
                ))}

                {routes.publicRoutes.map(route => (
                    <PublicRoute
                        key={route.path}
                        path={route.path} 
                        component={React.lazy(route.loader)}
                    />
                ))}

                <Redirect from="*" to="/404" />
            </Switch>    
        </Router>
    )
}

export default RoutesComponent

