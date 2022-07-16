let FOLLOW_FRIEND = "FOLLOW-FRIEND";
let UNFOLLOW_FRIEND = "UNFOLLOW-FRIEND";
let SET_FRIENDS = "SET-FRIENDS";
let SET_SIZE_PAGE_FRIEND = "SET-SIZE-PAGE-FRIEND";
let SET_PAGE_COUNT_FRIEND = "SET-PAGE-COUNT-FRIEND";
let SET_TOTAL_COUNT_FRIEND = "SET-TOTAL-COUNT-FRIEND";
let IS_FEATCHING_FRIEND = "IS-FEATCHING-FRIEND";
let TOTAL_PAGES_FRIEND = "TOTAL-PAGES-FRIEND";
let COUNT_DOTE_START_FRIEND = "COUNT-DOTE-START-FRIEND";
let COUNT_DOTE_END_FRIEND = "COUNT-DOTE-END-FRIEND";

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

let FriendsReduser = (state = initialState, action) => {
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
        type: "FOLLOW-FRIEND",
        userID: id
    }
}
export const UnFollowFriends = (id) => {
    return {
        type: "UNFOLLOW-FRIEND",
        userID: id
    }
}
export const setFriends = (friends) => {
    return {
        type: "SET-FRIENDS",
        friends: friends
    }
}
export const setSizePage = (size) => {
    return {
        type: "SET-SIZE-PAGE-FRIEND",
        sizePage: size
    }
}
export const setPageCount = (count) => {
    return {
        type: "SET-PAGE-COUNT-FRIEND",
        pageCount: count
    }
}
export const setTotalCount = (count) => {
    return {
        type: "SET-TOTAL-COUNT-FRIEND",
        totalCount: count
    }
}
export const IsFeatchingF = (bool) => {
    return {
        type: "IS-FEATCHING-FRIEND",
        isFetching: bool
    }
}
export const setTotalPages = (count) => {
    return {
        type: "TOTAL-PAGES-FRIEND",
        totalPages: count
    }
}
export const setCountDoteStart = (dote) => {
    return {
        type: "COUNT-DOTE-START-FRIEND",
        dote: dote
    }
}
export const setCountDoteEnd = (dote) => {
    return {
        type: "COUNT-DOTE-END-FRIEND",
        dote: dote
    }
}

export default FriendsReduser;