import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children, user}) => {
    if (!user) {
        return <Navigate to="/Signin" />
        
    }
}


export default ProtectedRoutes