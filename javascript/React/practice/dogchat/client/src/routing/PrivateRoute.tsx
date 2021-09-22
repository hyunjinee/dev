import React from 'react'
import {useSelector} from 'react-redux'

import { RouteProps, Route, Redirect } from "react-router";
import {RootState} from '../utilities/types'




interface Props extends RouteProps {
    component: any
}


export const PrivateRoute: React.FC<Props> = ({component: Component, ...rest})=> {
    const {isAuthenticated} = useSelector((state: RootState) => state.authState)

    return (
        <Route
        render={(props) => (isAuthenticated? <Component {...props}/> : <Redirect to="/" />) }
        {...rest}
        />
    )
}