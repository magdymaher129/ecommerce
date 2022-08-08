import React ,{useContext}from 'react'
import {Route,Redirect}from 'react-router-dom'
import { UserContext } from '../context/userContext'
import Login from '../pages/login/Login'


const PrivateRoute = ({component:RouteComponent,...rest}) => {
    const{user} = useContext(UserContext)
  return (
    <Route {...rest} render={(routeProps) =>!user? <Redirect to={'/Login'} />:<RouteComponent {...routeProps}/>
    }
      
    />
  )
}

export default PrivateRoute
