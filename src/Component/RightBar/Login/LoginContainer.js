import React from "react";
import LoginForm from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {LoginThunk} from "../../../Redux/AuthReducer";
import {getError, getIsAuth} from "../../../Redux/Selectors";

let mapStateToProps = (state) =>{
    return {
        error: getError(state),
        isAuth: getIsAuth(state)
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        login:(email, password, rememberMe) => {
            dispatch(LoginThunk(email, password, rememberMe));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(LoginForm);