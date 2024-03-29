// @ts-ignore
import {profileAPI} from "../DAL/API.js";
import {AppDispatch} from "./Store-redux";
import {Dispatch} from "react";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_ERROR = "auth/SET_ERROR";
const SET_URL = "auth/SET_URL";


let initialState = {
    login: null as null | string,
    userID: null as null | number,
    email: null as null | string,
    isAuth: false as true | false,
    Error: null as null | string,
    CaptchaURL: null as null | string
}

export type InitialStateType = typeof initialState;

type ActionType = SetUserDataACType | ErrorACType | SetCaptchaURLACType

let AuthReducer = (state = initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.data.login,
                userID: action.data.userID,
                email: action.data.email,
                isAuth: action.data.isAuth
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

type SetUserDataACType = {
    type: typeof SET_USER_DATA,
    data: {
        userID: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}
export const SetUserDataAC = (userID: number | null, login: string | null, email: string | null, isAuth: boolean) : SetUserDataACType => {
    return {
        type: "auth/SET_USER_DATA",
        data: {userID, login, email, isAuth}
    }
}

type ErrorACType = {
    type: typeof SET_ERROR,
    message: string
}
export const ErrorAC = (message: string) : ErrorACType => {
    return {
        type: "auth/SET_ERROR",
        message: message
    }
}

type SetCaptchaURLACType = {
    type: typeof SET_URL,
    payload: string
}
export const SetCaptchaURLAC = (url: string) : SetCaptchaURLACType => {
    return {
        type: "auth/SET_URL",
        payload: url
    }
}

export const AuthMeThunk = () => { //TODO try and catch(error)
    return async (dispatch: AppDispatch) => {
        try {
            let response = await profileAPI.AuthMe()
            if (response.resultCode === 0) {
                dispatch(SetUserDataAC(response.data.id, response.data.login, response.data.email, true));
            }
        } catch (error) {

        }
    }
}
export const getCaptchaURLThunk = () => {
    return async (dispatch: AppDispatch) => {
        let response = await profileAPI.getCaptchaURL()
        debugger
        if (response.status === 200) {
            debugger;
            dispatch(SetCaptchaURLAC(response.data.url));
        }
    }
}

export const LoginThunk = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: AppDispatch) => {
        let response = await profileAPI.Login(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            dispatch(SetUserDataAC(response.data.id, response.data.login, response.data.email, true));

        }
        if (response.resultCode === 10) {
            dispatch(getCaptchaURLThunk());
            dispatch(ErrorAC(response.messages));
        } else {
            dispatch(ErrorAC(response.messages));
        }
    }
}
export const LogoutThunk = () => {
    return async (dispatch: AppDispatch) => {
        let response = await profileAPI.Logout()
        if (response.resultCode === 0) {
            dispatch(SetUserDataAC(null, null, null, false));
        }
    }
}


export default AuthReducer;