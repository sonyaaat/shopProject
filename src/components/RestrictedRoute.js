import { useSelector } from "react-redux";
import React from 'react';
import { Navigate} from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/auth-selectors";
export  function RestrictedRoute({component:Component,restricted=false}){
const isLoggedIn=useSelector(selectIsLoggedIn)
const shouldRedirect=isLoggedIn && restricted
return(
   <>
        {shouldRedirect ? <Navigate to="/"/> : Component}
        </>
)
}