import { Outlet, Navigate } from 'react-router-dom'
import * as React from 'react'

const BeforeLoginRoutes = () => {
    let auth = {'token': false}
    return(
        !auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default BeforeLoginRoutes