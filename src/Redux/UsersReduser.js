let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";
let SET_SIZE_PAGE = "SET-SIZE-PAGE";
let SET_PAGE_COUNT = "SET-PAGE-COUNT";
let SET_TOTAL_COUNT = "SET-TOTAL-COUNT";

let initialState = {
    users: [],
    totalCount: 0,
    pageCount: 1,
    sizePage: 10
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
                ...state.users,
                users: action.users
            }
        }
        case SET_SIZE_PAGE: {
            return {
                ...state,
                sizePage: action.sizePage
            }
        }
        case SET_PAGE_COUNT: {
            return {
                ...state,
                pageCount: action.pageCount
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
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
export const SetUsersAC = (users) => {
    return {
        type: "SET-USERS",
        users: users
    }
}
export const SetSizePageAC = (size) => {
    return {
        type: "SET-SIZE-PAGE",
        sizePage: size
    }
}
export const SetPageCountAC = (count) => {
    return {
        type: "SET-PAGE-COUNT",
        pageCount: count
    }
}
export const SetTotalCountAC = (count) => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount: count
    }
}

export default UsersReduser;