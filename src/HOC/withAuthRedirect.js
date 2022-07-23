import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {getIsAuth} from "../Redux/Selectors";

let mapStateToProps = (state) => {
    debugger;
    return {
        isAuth: getIsAuth(state)
    }
}

let withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render () {

            if(!this.props.isAuth) return <Navigate to="/login" />

            return <Component {...this.props}/>
        }
    }
    let ConnectAuthRedirect = connect(mapStateToProps)(RedirectComponent)
    return ConnectAuthRedirect;
}

export default withAuthRedirect;