import {profileAPI} from "../DAL/API";

const ADD_POST = "profile/ADD_POST";
const SET_PROFILE = "profile/SET_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const IS_FEATCHING_PROFILE = "profile/IS_FEATCHING_PROFILE";

export type PostsType = {
    id: number
    text: string
}
export type ProfileType = {
    aboutMe:  null | string
    contacts: {
        facebook: null | string ,
        github: null | string,
        instagram: null | string,
        mainlink: null | string,
        twitter: null | string,
        vk: null | string,
        website: null | string,
        youtube: null | string
    },
    fullName: null | string,
    lookingForAJob: null | string,
    lookingForAJobDescription: null | string,
    photos: {
        small: null | string,
        large: null | string
    },
    userId: null | number
}

let initialState = {
    posts: [
        {id: 0, text: 'Hello world!'},
        {id: 1, text: 'Hello milk'},
        {id: 2, text: 'Hello friends'}
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: null as null | string,
    isFetching: false as true | false,
}

export type ProfileReducerType = typeof initialState;

const ProfileReducer = (state = initialState, action: any) : ProfileReducerType => {
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

export type AddPostActionType = {
    type: typeof ADD_POST
    text: string
}
export const AddPostAction = (text: string) : AddPostActionType => {
    return {
        type: "profile/ADD_POST",
        text: text
    }
}

export type ProfileActionType = {
    type: typeof SET_PROFILE
    profile: any
}
export const ProfileAction = (profile: any) : ProfileActionType => {
    return {
        type: "profile/SET_PROFILE",
        profile
    }
}

export type StatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const StatusAction = (status: string) : StatusActionType => {
    return {
        type: "profile/SET_STATUS",
        status: status
    }
}

export type IsFeatchingFType = {
    type: typeof IS_FEATCHING_PROFILE
    isFetching: boolean
}
export const IsFeatchingF = (bool: boolean) : IsFeatchingFType => {
    return {
        type: "profile/IS_FEATCHING_PROFILE",
        isFetching: bool
    }
}

export const InfoProfileThunk = (userID: number) => {
    return async (dispatch: any) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.InfoProfile(userID)
        dispatch(ProfileAction(response));
        dispatch(IsFeatchingF(false));
    }
}
export const getStatusProfileThunk = (userID: number) => {
    return async (dispatch: any) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.getStatusProfile(userID)
        dispatch(StatusAction(response.data));
        dispatch(IsFeatchingF(false));
    }
}
export const setStatusProfileThunk = (status: string) => {
    return async (dispatch: any) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.setStatusProfile(status)
        if (response.data.resultCode === 0) {
            dispatch(StatusAction(status));
            dispatch(IsFeatchingF(false));
        }
    }
}
export const setContactsThunk = (data: any, userID: number) => {
    return async (dispatch: any) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.setContacts(data)
        if (response.data.resultCode === 0) {
            dispatch(InfoProfileThunk(userID))
            dispatch(IsFeatchingF(false));
        }
    }
}
export const setPhotoProfile = (userID: number) => {
    return async (dispatch: any) => {
        dispatch(IsFeatchingF(true));
        let response = await profileAPI.setPhotoProfile()
        if (response.data.resultCode === 0) {
            dispatch(InfoProfileThunk(userID))
            dispatch(IsFeatchingF(false));
        }
    }
}


export default ProfileReducer;