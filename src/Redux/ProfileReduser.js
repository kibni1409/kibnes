let ADD_POST = "ADD-POST";
let CHANGE_TEXT_POST = "CHANGE-TEXT-POST";

let initialState = {
        posts: [
            {id: 0, text: 'Hello world!'},
            {id: 1, text: 'Hello milk'},
            {id: 2, text: 'Hello friends'}
        ],
        NewTextPost: 'ww'
}

let ProfileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let sizePosts = state.posts.length;
            let textPost = state.NewTextPost;
            return {
                ...state,
                posts: [...state.posts, {id:sizePosts, text: textPost }],
                NewTextPost: ''
            }
        }
        case CHANGE_TEXT_POST: {
            return {
                ...state,
                NewTextPost: action.text
            }
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

export default ProfileReduser;