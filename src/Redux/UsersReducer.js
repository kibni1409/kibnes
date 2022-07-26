import {usersAPI} from "../DAL/API";

let FOLLOW = "users/FOLLOW";
let SET_USERS = "users/SET_USERS";
let SET_PAGE_COUNT = "users/SET_PAGE_COUNT";
let SET_TOTAL_COUNT = "users/SET_TOTAL_COUNT";
let IS_FEATCHING = "users/IS_FEATCHING";
let TOTAL_PAGES = "users/TOTAL_PAGES";
let COUNT_DOTE_START = "users/COUNT_DOTE_START";
let COUNT_DOTE_END = "users/COUNT_DOTE_END";

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
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                ...state.users,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, follow: action.action};
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

export const FollowUsers = (id) => {
    return {
        type: "users/FOLLOW",
        userID: id,
        action: true
    }
}
export const UnFollowUsers = (id) => {
    return {
        type: "users/FOLLOW",
        userID: id,
        action: false
    }
}
export const setPageCount = (count) => {
    return {
        type: "users/SET_PAGE_COUNT",
        pageCount: count
    }
}
export const setUsers = (users) => {
    return {
        type: "users/SET_USERS",
        users: users
    }
}
export const setTotalCount = (count) => {
    return {
        type: "users/SET_TOTAL_COUNT",
        totalCount: count
    }
}
export const IsFeatchingF = (bool) => {
    return {
        type: "users/IS_FEATCHING",
        isFetching: bool
    }
}
export const setTotalPages = (count) => {
    return {
        type: "users/TOTAL_PAGES",
        totalPages: count
    }
}
export const setCountDoteStart = (dote) => {
    return {
        type: "users/COUNT_DOTE_START",
        dote: dote
    }
}
export const setCountDoteEnd = (dote) => {
    return {
        type: "users/COUNT_DOTE_END",
        dote: dote
    }
}

export const setUsersThunk = (pageCount, sizePage) => {
    return async dispatch => {
        dispatch(IsFeatchingF(true));
        let response = await usersAPI.GetUsers(pageCount, sizePage)
        dispatch(IsFeatchingF(false));
        dispatch(setUsers(response.items));
        dispatch(setPageCount(pageCount));
        dispatch(setTotalCount(response.totalCount));
    }
}

export const FollowUserThunk = (userID) => {
    return async dispatch => {
        dispatch(IsFeatchingF(true));

        let response = await usersAPI.Follow(userID)
        if (response.resultCode === 0) {
            dispatch(FollowUsers(userID));
        }
        dispatch(IsFeatchingF(false));
    }
}

export const unFollowUserThunk = (userID) => {
    return async dispatch => {
        dispatch(IsFeatchingF(true));

        let response = await usersAPI.UnFollow(userID)
        if (response.resultCode === 0) {
            dispatch(UnFollowUsers(userID));
        }
        dispatch(IsFeatchingF(false));
    }
}

export const setFriendsThunk = (pageCount, sizePage) => {
    return async dispatch => {
        dispatch(IsFeatchingF(true));
        let response = await usersAPI.GetFriends(pageCount, sizePage)
        dispatch(IsFeatchingF(false));
        dispatch(setUsers(response.items));
        dispatch(setPageCount(pageCount));
        dispatch(setTotalCount(response.totalCount));

    }
}

export default UsersReducer;