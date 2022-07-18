import {usersAPI} from "../API/API";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_PAGE_COUNT = "SET_PAGE_COUNT";
let SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
let IS_FEATCHING = "IS_FEATCHING";
let TOTAL_PAGES = "TOTAL_PAGES";
let COUNT_DOTE_START = "COUNT_DOTE_START";
let COUNT_DOTE_END = "COUNT_DOTE_END";

let initialState = {
    users: [],
    totalCount: 0,
    pageCount: 1,
    sizePage: 10,
    isFetching: false,
    totalPages: 0,
    countDoteStart: false,
    countDoteEnd: false
}

let UsersReducer = (state = initialState, action) => {
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
        case IS_FEATCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOTAL_PAGES: {
            return {
                ...state,
                totalPages: action.totalPages
            }
        }
        case COUNT_DOTE_START: {
            return {
                ...state,
                countDoteStart: action.dote

            }
        }
        case COUNT_DOTE_END: {
            return {
                ...state,
                countDoteEnd: action.dote

            }
        }
        default:
            return state;
    }
}

export const FollowUsers = (id) =>{
    return {
        type: "FOLLOW",
        userID: id
    }
}
export const UnFollowUsers = (id) => {
    return {
        type: "UNFOLLOW",
        userID: id
    }
}
export const setPageCount = (count) => {
    return {
        type: "SET_PAGE_COUNT",
        pageCount: count
    }
}
export const setUsers = (users) => {
    return{
        type: "SET_USERS",
        users: users
    }
}
export const setTotalCount = (count) => {
    return {
        type: "SET_TOTAL_COUNT",
        totalCount: count
    }
}
export const IsFeatchingF = (bool) => {
    return {
        type: "IS_FEATCHING",
        isFetching: bool
    }
}
export const setTotalPages = (count) => {
    return {
        type: "TOTAL_PAGES",
        totalPages: count
    }
}
export const setCountDoteStart = (dote) => {
    return {
        type: "COUNT_DOTE_START",
        dote: dote
    }
}
export const setCountDoteEnd = (dote) => {
    return {
        type: "COUNT_DOTE_END",
        dote: dote
    }
}

export const setUsersThunk = (pageCount, sizePage) => {
    return dispatch =>{
        dispatch(IsFeatchingF(true));

        usersAPI.GetUsers(pageCount, sizePage).then(data => {
            dispatch(IsFeatchingF(false));
            dispatch(setUsers(data.items));
            dispatch(setPageCount(pageCount));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}

export const FollowUserThunk = (userID) => {
    return dispatch => {
        dispatch(IsFeatchingF(true));

        usersAPI.Follow(userID).then(data => {
            if(data.resultCode === 0){
                dispatch(FollowUsers(userID));
            }
            dispatch(IsFeatchingF(false));
        })
    }
}

export const unFollowUserThunk = (userID) => {
    return dispatch => {
        dispatch(IsFeatchingF(true));

        usersAPI.UnFollow(userID).then(data => {
            if(data.resultCode === 0){
               dispatch(UnFollowUsers(userID));
            }
            dispatch(IsFeatchingF(false));
        })
    }
}

export default UsersReducer;