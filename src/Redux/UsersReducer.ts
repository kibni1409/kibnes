import {usersAPI} from "../DAL/API";
import {AnyAction} from "redux";

let FOLLOW = "users/FOLLOW";
let SET_USERS = "users/SET_USERS";
let SET_PAGE_COUNT = "users/SET_PAGE_COUNT";
let SET_TOTAL_COUNT = "users/SET_TOTAL_COUNT";
let IS_FEATCHING = "users/IS_FEATCHING";
let TOTAL_PAGES = "users/TOTAL_PAGES";
let COUNT_DOTE_START = "users/COUNT_DOTE_START";
let COUNT_DOTE_END = "users/COUNT_DOTE_END";

export type UserType = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
    },
    status: string
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    totalCount: 0 as number,
    pageCount: 1 as number,
    sizePage: 10 as number,
    isFetching: false as false | true,
    totalPages: 0 as number,
    countDoteStart: false as false | true,
    countDoteEnd: false as false | true
}

export type InitialStateType = typeof initialState;

type ActionType = FollowUsersType | SetPageCountType | SetUsersType | SetTotalCountType | IsFeatchingFType | SetTotalPagesType | SetCountDoteStartType | SetCountDoteEndType

let UsersReducer = (state = initialState, action: AnyAction) : InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                ...state.users,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: action.action};
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

export type FollowUsersType = {
    type: typeof FOLLOW,
    userID: number,
    action: boolean
}
export const FollowUsers = (id: number) : FollowUsersType => {
    return {
        type: "users/FOLLOW",
        userID: id,
        action: true
    }
}
export const UnFollowUsers = (id: number) : FollowUsersType => {
    return {
        type: "users/FOLLOW",
        userID: id,
        action: false
    }
}

export type SetPageCountType = {
    type: typeof SET_PAGE_COUNT,
    pageCount: number
}
export const setPageCount = (count: number) : SetPageCountType => {
    return {
        type: "users/SET_PAGE_COUNT",
        pageCount: count
    }
}

export type SetUsersType = {
    type: typeof SET_USERS,
    users: any
}
export const setUsers = (users: any) : SetUsersType => {
    return {
        type: "users/SET_USERS",
        users: users
    }
}

export type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT,
    totalCount: number
}
export const setTotalCount = (count: number) : SetTotalCountType => {
    return {
        type: "users/SET_TOTAL_COUNT",
        totalCount: count
    }
}

export type IsFeatchingFType = {
    type: typeof IS_FEATCHING,
    isFetching: boolean
}
export const IsFeatchingF = (bool: boolean) : IsFeatchingFType => {
    return {
        type: "users/IS_FEATCHING",
        isFetching: bool
    }
}

export type SetTotalPagesType = {
    type: typeof TOTAL_PAGES,
    totalPages: number
}
export const setTotalPages = (count: number) : SetTotalPagesType => {
    return {
        type: "users/TOTAL_PAGES",
        totalPages: count
    }
}

export type SetCountDoteStartType = {
    type: typeof COUNT_DOTE_START,
    dote: boolean
}
export const setCountDoteStart = (dote: boolean) : SetCountDoteStartType => {
    return {
        type: "users/COUNT_DOTE_START",
        dote: dote
    }
}

export type SetCountDoteEndType = {
    type: typeof COUNT_DOTE_END,
    dote: boolean
}
export const setCountDoteEnd = (dote: boolean) : SetCountDoteEndType => {
    return {
        type: "users/COUNT_DOTE_END",
        dote: dote
    }
}

export const setUsersThunk = (pageCount: number, sizePage: number) => {
    return async dispatch => {
        dispatch(IsFeatchingF(true));
        let response = await usersAPI.GetUsers(pageCount, sizePage)
        dispatch(IsFeatchingF(false));
        dispatch(setUsers(response.items));
        dispatch(setPageCount(pageCount));
        dispatch(setTotalCount(response.totalCount));
    }
}

export const FollowUserThunk = (userID: number) => {
    return async dispatch => {
        dispatch(IsFeatchingF(true));

        let response = await usersAPI.Follow(userID)
        if (response.resultCode === 0) {
            dispatch(FollowUsers(userID));
        }
        dispatch(IsFeatchingF(false));
    }
}

export const unFollowUserThunk = (userID: number) => {
    return async dispatch => {
        dispatch(IsFeatchingF(true));

        let response = await usersAPI.UnFollow(userID)
        if (response.resultCode === 0) {
            dispatch(UnFollowUsers(userID));
        }
        dispatch(IsFeatchingF(false));
    }
}

export const setFriendsThunk = (pageCount: number, sizePage: number) => {
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