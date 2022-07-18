import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthMeThunk, SetUserDataAC} from "../Redux/AuthReducer";
import {useParams} from "react-router-dom";


const HeaderContainer = (props) =>{

    let {userID} = useParams();

    useEffect(() => {
        props.AuthMeThunk()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //    props.setUser(response.data.data.id ,response.data.data.login, response.data.data.email )
        // })
    },[userID]);

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
        setUser: (userID, login, email) =>{
            let action = SetUserDataAC(userID, login, email);
            dispatch(action);
        },
        AuthMeThunk: () => {
            dispatch(AuthMeThunk())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);