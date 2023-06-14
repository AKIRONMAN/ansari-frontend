import { Outlet, Navigate } from 'react-router-dom'
import * as React from 'react'

const AfterLoginRoutes = () => {
    let auth = {'token': false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default AfterLoginRoutes