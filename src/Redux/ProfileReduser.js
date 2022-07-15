let ADD_POST = "ADD-POST";
let CHANGE_TEXT_POST = "CHANGE-TEXT-POST";
let SET_PROFILE = "SET-PROFILE";

let initialState = {
    posts: [
        {id: 0, text: 'Hello world!'},
        {id: 1, text: 'Hello milk'},
        {id: 2, text: 'Hello friends'}
    ],
    NewTextPost: 'ww',
    profile: null
}

let ProfileReduser = (state = initialState, action) => {
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
            debugger;
        }
        default:
            return state;
    }
}

export const AddPostAction = () => {
    return {
        type: "ADD-POST"
    }
}
export const ChangeTextPostAction = (text) => {
    return {
        type: "CHANGE-TEXT-POST",
        text: text
    }
}
export const ProfileAction = (profile) => {
    return {
        type: "SET-PROFILE",
        profile
    }
}

export default ProfileReduser;