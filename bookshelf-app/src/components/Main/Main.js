import React from 'react';
import "./styles"
import { Route, Switch } from "react-router-dom"
import routes from '../../routes';
import { MainLayout } from "../../components"

const Main = () => {
    return (
        <div>
           <Switch>
               {
                   routes.map(route => {
                       return <Route 
                           path = {route.path}
                           exact= {route.exact}
                           component={(props) => {
                               const Comp = route.component
                               return <MainLayout routerProps = {props} title={route.title}>{Comp}</MainLayout>
                               }}
                       />
                   })
               }
           </Switch>
        </div>
    );
}

export default Main;
