import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthMeThunk, LogoutThunk} from "../../Redux/AuthReducer.ts";
import {useParams} from "react-router-dom";


const HeaderContainer = (props) =>{

    let {userID} = useParams();

    useEffect(() => {
        props.AuthMeThunk()
    }, [props.userID]);

    return (<Header {...props} />)
}
let mapStateToProps = (state) =>{
    return {
        login: state.Auth.login,
        userID: state.Auth.userID,
        email: state.Auth.email,
        isAuth: state.Auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        AuthMeThunk: () => {
            dispatch(AuthMeThunk())
        },
        logout:() => {
            dispatch(LogoutThunk());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);