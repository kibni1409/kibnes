import React from "react";
import LoginForm from "./LoginForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCaptchaURLThunk, LoginThunk} from "../../../Redux/AuthReducer";
import {getCaptcha, getError, getIsAuth} from "../../../Redux/Selectors";

let mapStateToProps = (state) =>{
    return {
        error: getError(state),
        isAuth: getIsAuth(state),
        captchaURL: getCaptcha(state)
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        login:(email, password, rememberMe, captcha) => {
            dispatch(LoginThunk(email, password, rememberMe, captcha));
        },
        captcha:() => {
            dispatch(getCaptchaURLThunk());
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(LoginForm);