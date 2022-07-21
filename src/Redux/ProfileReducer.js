import {profileAPI} from "../DAL/API";

let ADD_POST = "ADD_POST";
let SET_PROFILE = "SET_PROFILE";
let SET_STATUS = "SET_STATUS";
let IS_FEATCHING_PROFILE = "IS_FEATCHING_PROFILE";

let initialState = {
    posts: [
        {id: 0, text: 'Hello world!'},
        {id: 1, text: 'Hello milk'},
        {id: 2, text: 'Hello friends'}
    ],
    profile: null,
    status: "",
    isFetching: false,
}

let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let sizePosts = state.posts.length;
            return {
                ...state,
                posts: [...state.posts, {id: sizePosts, text: action.text}],
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case IS_FEATCHING_PROFILE: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const AddPostAction = (text) => {
    return {
        type: "ADD_POST",
        text: text
    }
}
export const ProfileAction = (profile) => {
    return {
        type: "SET_PROFILE",
        profile
    }
}
export const StatusAction = (status) => {
    return {
        type: "SET_STATUS",
        status: status
    }
}
export const IsFeatchingF = (bool) => {
    return {
        type: "IS_FEATCHING_PROFILE",
        isFetching: bool
    }
}

export const InfoProfileThunk = (userID) => {
    return (dispatch) => {
        dispatch(IsFeatchingF(true));
        profileAPI.InfoProfile(userID).then(data => {
            dispatch(ProfileAction(data));
            dispatch(IsFeatchingF(false));
        })
    }
}
export const getStatusProfileThunk = (userID) => {
    return (dispatch) => {
        dispatch(IsFeatchingF(true));
        profileAPI.getStatusProfile(userID).then(data => {
            dispatch(StatusAction(data.data));
            dispatch(IsFeatchingF(false));
        })
    }
}
export const setStatusProfileThunk = (status) => {
    return (dispatch) => {
        dispatch(IsFeatchingF(true));
        profileAPI.setStatusProfile(status).then(data => {

            if(data.data.resultCode === 0){
                dispatch(StatusAction(status));
                dispatch(IsFeatchingF(false));
            }
        })
    }
}


export default ProfileReducer;