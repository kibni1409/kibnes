import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
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