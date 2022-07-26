import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth} from "../Redux/Selectors";

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state)
    }
}



let withAuthRedirect = (Component) =>{
    let RedirectComponent = (props) =>{
            let location = useLocation();
        console.log(location)
            if(!props.isAuth) return <Navigate to={'/login/'}  state={{ from: location }} />
            return <Component {...props}/>
    }
    let ConnectAuthRedirect = connect(mapStateToProps)(RedirectComponent)
    return ConnectAuthRedirect;
}

export default withAuthRedirect;