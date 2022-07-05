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
        case ADD_POST:
            let size = state.posts.length;
            let post = {
                id: size,
                text: state.NewTextPost
            }
            state.posts.push(post);
            state.NewTextPost = "";
         return state;

        case CHANGE_TEXT_POST:
            state.NewTextPost = action.text;
            return state;
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