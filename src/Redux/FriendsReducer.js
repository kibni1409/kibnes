import {usersAPI} from "../API/API";

let FOLLOW_FRIEND = "FOLLOW_FRIEND";
let UNFOLLOW_FRIEND = "UNFOLLOW_FRIEND";
let SET_FRIENDS = "SET_FRIENDS";
let SET_SIZE_PAGE_FRIEND = "SET-SIZE_PAGE_FRIEND";
let SET_PAGE_COUNT_FRIEND = "SET_PAGE_COUNT_FRIEND";
let SET_TOTAL_COUNT_FRIEND = "SET_TOTAL_COUNT_FRIEND";
let IS_FEATCHING_FRIEND = "IS_FEATCHING_FRIEND";
let TOTAL_PAGES_FRIEND = "TOTAL_PAGES_FRIEND";
let COUNT_DOTE_START_FRIEND = "COUNT_DOTE_START_FRIEND";
let COUNT_DOTE_END_FRIEND = "COUNT_DOTE_END_FRIEND";

let initialState = {
    friends: [],
    totalCount: 0,
    pageCount: 1,
    sizePage: 10,
    isFetching: false,
    totalPages: 0,
    countDoteStart: false,
    countDoteEnd: false
}

let FriendsReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW_FRIEND: {
            return {
                ...state,
                ...state.friends,
                friends: state.friends.map(u => {
                    if(u.id === action.userID){
                        return {...u, follow: true};
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW_FRIEND: {
            return {
                ...state,
                ...state.friends,
                friends: state.friends.map(u => {
                    if(u.id === action.userID){
                        return {...u, follow: false};
                    }
                    return u;
                })
            }
        }
        case SET_FRIENDS: {
            return {
                ...state,
                ...state.friends,
                friends: action.friends
            }
        }
        case SET_SIZE_PAGE_FRIEND: {
            return {
                ...state,
                sizePage: action.sizePage
            }
        }
        case SET_PAGE_COUNT_FRIEND: {
            return {
                ...state,
                pageCount: action.pageCount
            }
        }
        case SET_TOTAL_COUNT_FRIEND: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case IS_FEATCHING_FRIEND: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOTAL_PAGES_FRIEND: {
            return {
                ...state,
                totalPages: action.totalPages
            }
        }
        case COUNT_DOTE_START_FRIEND: {
            return {
                ...state,
                countDoteStart: action.dote

            }
        }
        case COUNT_DOTE_END_FRIEND: {
            return {
                ...state,
                countDoteEnd: action.dote

            }
        }
        default:
            return state;
    }
}

export const FollowFriends = (id) =>{
    return {
        type: "FOLLOW_FRIEND",
        userID: id
    }
}
export const UnFollowFriends = (id) => {
    return {
        type: "UNFOLLOW_FRIEND",
        userID: id
    }
}
export const setFriends = (friends) => {
    return {
        type: "SET_FRIENDS",
        friends: friends
    }
}
export const setSizePage = (size) => {
    return {
        type: "SET_SIZE_PAGE_FRIEND",
        sizePage: size
    }
}
export const setPageCount = (count) => {
    return {
        type: "SET_PAGE_COUNT_FRIEND",
        pageCount: count
    }
}
export const setTotalCount = (count) => {
    return {
        type: "SET_TOTAL_COUNT_FRIEND",
        totalCount: count
    }
}
export const IsFeatchingF = (bool) => {
    return {
        type: "IS_FEATCHING_FRIEND",
        isFetching: bool
    }
}
export const setTotalPages = (count) => {
    return {
        type: "TOTAL_PAGES_FRIEND",
        totalPages: count
    }
}
export const setCountDoteStart = (dote) => {
    return {
        type: "COUNT_DOTE_START_FRIEND",
        dote: dote
    }
}
export const setCountDoteEnd = (dote) => {
    return {
        type: "COUNT_DOTE_END_FRIEND",
        dote: dote
    }
}

export const setFriendsThunk = (pageCount, sizePage) => {
    return dispatch =>{
        dispatch(IsFeatchingF(true));

        usersAPI.GetFriends(pageCount, sizePage).then(data => {
            dispatch(IsFeatchingF(false));
            dispatch(setFriends(data.items));
            dispatch(setPageCount(pageCount));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}

export const FollowFriendThunk = (userID) => {
    return dispatch => {
        dispatch(IsFeatchingF(true));

        usersAPI.Follow(userID).then(data => {
            if(data.resultCode === 0){
                dispatch(FollowFriends(userID));
            }
            dispatch(IsFeatchingF(false));
        })
    }
}

export const unFollowFriendThunk = (userID) => {
    return dispatch => {
        dispatch(IsFeatchingF(true));

        usersAPI.UnFollow(userID).then(data => {
            if(data.resultCode === 0){
                dispatch(UnFollowFriends(userID));
            }
            dispatch(IsFeatchingF(false));
        })
    }
}



export default FriendsReducer;