import {profileAPI} from "../DAL/API";

const ADD_POST = "profile/ADD_POST";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const IS_FEATCHING_PROFILE = "profile/IS_FEATCHING_PROFILE";

let initialState = {
    posts: [
        {id: 0, text: 'Hello world!'},
        {id: 1, text: 'Hello milk'},
        {id: 2, text: 'Hello friends'}
    ],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainlink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null
        },
        fullName: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: {
            small: null,
            large: null
        },
        userId: null
        },
    status: "",
    isFetching: false,
}

const ProfileReducer = (state = initialState, action) => {
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
        type: "profile/ADD_POST",
        text: text
    }
}
export const ProfileAction = (profile) => {

    return {
        type: "profile/SET_PROFILE",
        profile
    }
}
export const StatusAction = (status) => {
    return {
        type: "profile/SET_STATUS",
        status: status
    }
}
export const IsFeatchingF = (bool) => {
    return {
        type: "profile/IS_FEATCHING_PROFILE",
        isFetching: bool
    }
}

export const InfoProfileThunk = (userID) => {
    return async (dispatch) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.InfoProfile(userID)
        dispatch(ProfileAction(response));
        dispatch(IsFeatchingF(false));
    }
}
export const getStatusProfileThunk = (userID) => {
    return async (dispatch) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.getStatusProfile(userID)
        dispatch(StatusAction(response.data));
        dispatch(IsFeatchingF(false));
    }
}
export const setStatusProfileThunk = (status) => {
    return async (dispatch) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.setStatusProfile(status)
        if (response.data.resultCode === 0) {
            dispatch(StatusAction(status));
            dispatch(IsFeatchingF(false));
        }
    }
}
export const setContactsThunk = (data, userID) => {
    return async (dispatch) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.setContacts(data)
        if (response.data.resultCode === 0) {
            dispatch(InfoProfileThunk(userID))
            dispatch(IsFeatchingF(false));
        }
    }
}
export const setPhotoProfile = (userID) => {
    return async (dispatch) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.setPhotoProfile()
        if (response.data.resultCode === 0) {
            dispatch(InfoProfileThunk(userID))
            dispatch(IsFeatchingF(false));
        }
    }
}


export default ProfileReducer;