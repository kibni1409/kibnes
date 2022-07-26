import {profileAPI} from "../DAL/API";
import {Navigate} from "react-router-dom";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_ERROR = "auth/SET_ERROR";

let initialState = {
    login: null,
    userID: null,
    email: null,
    isAuth: false,
    Error: null
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

export const AuthMeThunk = () => {
    return async dispatch => {
        let response = await profileAPI.AuthMe()
        if (response.resultCode === 0) {
            dispatch(SetUserDataAC(response.data.id, response.data.login, response.data.email, true));
        }
    }
}
export const LoginThunk = (email, password, rememberMe) => {
    return async dispatch => {
        let response = await profileAPI.Login(email, password, rememberMe)
        if (response.resultCode === 0) {
            dispatch(SetUserDataAC(response.data.id, response.data.login, response.data.email, true));

        } else {
            dispatch(ErrorAC(response.messages))
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

export default AutchReducer;