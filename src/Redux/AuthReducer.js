import {profileAPI} from "../DAL/API";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR = "SET_ERROR";

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
        type: "SET_USER_DATA",
        action: {userID, login, email, isAuth}
    }
}
export const ErrorAC = (message) => {
    return {
        type: "SET_ERROR",
        message: message
    }
}

export const AuthMeThunk = () => {
    return dispatch => {
        profileAPI.AuthMe().then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetUserDataAC(data.data.id, data.data.login, data.data.email, true));
                }
            }
        );
    }
}
export const LoginThunk = (email, password, rememberMe) => {
    return dispatch => {
        profileAPI.Login(email, password, rememberMe).then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetUserDataAC(data.data.id, data.data.login, data.data.email, true));
                }
                else{
                    dispatch(ErrorAC(data.messages))
                }
            }
        );
    }
}
export const LogoutThunk = () => {
    return dispatch => {
        profileAPI.Logout().then(data => {
                if (data.resultCode === 0) {
                    dispatch(SetUserDataAC(null, null, null, false));
                }

            }
        );
    }
}

export default AutchReducer;