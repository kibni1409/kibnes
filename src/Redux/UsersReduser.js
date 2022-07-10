let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";

let initialState = {
    users: [

    ]
}

let UsersReduser = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: {

            return {
                ...state,
                ...state.users,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, follow: true};
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {

            return {
                ...state,
                ...state.users,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, follow: false};
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const FollowAC = (id) =>{
    return {
        type: "FOLLOW",
        userID: id
    }
}
export const UnfollowAC = (id) => {
    return {
        type: "UNFOLLOW",
        userID: id
    }
}
export const SetUsers = (users) => {
    return {
        type: "SET-USERS",
        users: users
    }
}

export default UsersReduser;