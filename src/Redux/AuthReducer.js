import {profileAPI} from "../DAL/API";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_ERROR = "auth/SET_ERROR";
const SET_URL = "auth/SET_URL";

let initialState = {
    login: null,
    userID: null,
    email: null,
    isAuth: false,
    Error: null,
    CaptchaURL: null
}

let AutchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.action.login,
                userID: action.action.userID,
                email: action.action.email,
                isAuth: action.action.isAuth
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                Error: action.message,
            }
        }
        case SET_URL: {
            return {
                ...state,
                CaptchaURL: action.payload,
            }
        }
        default:
            return state;
    }
}

export const SetUserDataAC = (userID, login, email, isAuth) => {
    return {
        type: "auth/SET_USER_DATA",
        action: {userID, login, email, isAuth}
    }
}
export const ErrorAC = (message) => {
    return {
        type: "auth/SET_ERROR",
        message: message
    }
}
export const SetCaptchaURLAC = (url) => {
    return {
        type: "auth/SET_URL",
        payload: url
    }
}

export const AuthMeThunk = () => {
    return async dispatch => {
        let response = await profileAPI.AuthMe()
        if (response.resultCode === 0) {
            dispatch(SetUserDataAC(response.data.id, response.data.login, response.data.email, true));
        }
    }
}
export const LoginThunk = (email, password, rememberMe, captcha) => {
    return async dispatch => {
        let response = await profileAPI.Login(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            dispatch(SetUserDataAC(response.data.id, response.data.login, response.data.email, true));

        }
        if(response.resultCode === 10){
            debugger;
            dispatch(getCaptchaURLThunk());
            dispatch(ErrorAC(response.messages));
        }
        else {
            dispatch(ErrorAC(response.messages));
        }
    }
}
export const LogoutThunk = () => {
    return async dispatch => {
        let response = await profileAPI.Logout()
        if (response.resultCode === 0) {
            dispatch(SetUserDataAC(null, null, null, false));
        }
    }
}
export const getCaptchaURLThunk = () => {
    return async dispatch => {
        let response = await profileAPI.getCaptchaURL()
        debugger
        if (response.status === 200) {
            debugger;
            dispatch(SetCaptchaURLAC(response.data.url));
        }
    }
}

export default AutchReducer;