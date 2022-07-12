let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";
let SET_SIZE_PAGE = "SET-SIZE-PAGE";
let SET_PAGE_COUNT = "SET-PAGE-COUNT";
let SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
let IS_FEATCHING = "IS-FEATCHING";
let TOTAL_PAGES = "TOTAL-PAGES";
let COUNT_DOTE_START = "COUNT-DOTE-START";
let COUNT_DOTE_END = "COUNT-DOTE-END";

let initialState = {
    users: [],
    totalCount: 0,
    pageCount: 25,
    sizePage: 10,
    isFetching: false,
    totalPages: 0,
    countDoteStart: false,
    countDoteEnd: false
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
export const setUsers = (users) => {
    return {
        type: "SET-USERS",
        users: users
    }
}
export const setSizePage = (size) => {
    return {
        type: "SET-SIZE-PAGE",
        sizePage: size
    }
}
export const setPageCount = (count) => {
    return {
        type: "SET-PAGE-COUNT",
        pageCount: count
    }
}
export const setTotalCount = (count) => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount: count
    }
}
export const IsFeatchingF = (count) => {
    return {
        type: "IS-FEATCHING",
        isFetching: count
    }
}
export const setTotalPages = (count) => {
    return {
        type: "TOTAL-PAGES",
        totalPages: count
    }
}
export const setCountDoteStart = (dote) => {
    return {
        type: "COUNT-DOTE-START",
        dote: dote
    }
}
export const setCountDoteEnd = (dote) => {
    return {
        type: "COUNT-DOTE-END",
        dote: dote
    }
}

export default UsersReduser;