import {usersAPI} from "../DAL/API";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    login: null,
    userID: 24858,
    email: null,
    isAuth: false
}

let AutchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                login: action.action.login,
                userID: action.action.userID,
                email: action.action.email,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const SetUserDataAC = (userID, login, email) => {
    return {
        type: "SET_USER_DATA",
        action: {userID, login, email}
    }

}

export const AuthMeThunk = () => {
    return dispatch => {
        usersAPI.AuthMe().then(data => {
            dispatch(SetUserDataAC(data.data.id, data.data.login, data.data.email));
            }
        );
    }
}

export default AutchReducer;