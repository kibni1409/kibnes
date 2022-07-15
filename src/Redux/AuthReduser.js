const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    login: null,
    userID: 24858,
    email: null,
    isAuth: false
}

let AutchReduser = (state = initialState, action) => {
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
        type: "SET-USER-DATA",
        action: {userID, login, email}
    }

}

export default AutchReduser;