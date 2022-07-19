import {usersAPI as userAPI} from "../DAL/API";

let ADD_POST = "ADD_POST";
let CHANGE_TEXT_POST = "CHANGE_TEXT_POST";
let SET_PROFILE = "SET_PROFILE";
let IS_FEATCHING_PROFILE = "IS_FEATCHING_PROFILE";

let initialState = {
    posts: [
        {id: 0, text: 'Hello world!'},
        {id: 1, text: 'Hello milk'},
        {id: 2, text: 'Hello friends'}
    ],
    NewTextPost: 'ww',
    profile: null,
    isFetching: false,
}

let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let sizePosts = state.posts.length;
            let textPost = state.NewTextPost;
            return {
                ...state,
                posts: [...state.posts, {id: sizePosts, text: textPost}],
                NewTextPost: ''
            }
        }
        case CHANGE_TEXT_POST: {
            return {
                ...state,
                NewTextPost: action.text
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
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

export const AddPostAction = () => {
    return {
        type: "ADD_POST"
    }
}
export const ChangeTextPostAction = (text) => {
    return {
        type: "CHANGE_TEXT_POST",
        text: text
    }
}
export const ProfileAction = (profile) => {
    return {
        type: "SET_PROFILE",
        profile
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
        userAPI.InfoProfile(userID).then(data => {
            dispatch(ProfileAction(data));
            dispatch(IsFeatchingF(false));
        })
    }
}

export default ProfileReducer;