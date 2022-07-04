// let ADD_POST = "ADD-POST";
// let CHANGE_TEXT_POST = "CHANGE-TEXT-POST";
// let SEND_MESSAGE = "SEND-MESSAGE";
// let CHANGE_TEXT_MESSAGE = "CHANGE-TEXT-MESSAGE";

let store = {
    _state: {
        dialogs: [
            {id: 0, name: "Dima"},
            {id: 1, name: "Sveta"},
            {id: 2, name: "Andrey"}
        ],
        messages: [
            {id: 0, message: 'Hi', idDialog: 2},
            {id: 1, message: 'Yo', idDialog: 2},
            {id: 2, message: 'Normal', idDialog: 1},
            {id: 3, message: 'Ok', idDialog: 1},
            {id: 4, message: 'Yes, i to', idDialog: 0},
            {id: 5, message: 'I am OK', idDialog: 0}
        ],
        newTextMessage: 'ee',
        posts: [
            {id: 0, text: 'Hello world!'},
            {id: 1, text: 'Hello milk'},
            {id: 2, text: 'Hello friends'}
        ],
        NewTextPost: 'ww'
    },
    Rerender(){

    },
    getState() {
        return this._state;
    },
    Subscriber(obserser){
        this.Rerender = obserser;
    },
    dispatch(action) {

        if (action.type === "ADD-POST"){
            let size = this.getState().posts.length;
            let post = {
                id: size,
                text: this.getState().NewTextPost
            }
            this.getState().posts.push(post);
            this.getState().NewTextPost = "";
            this.Rerender(this.getState());
        }

        else if(action.type === "CHANGE-TEXT-POST"){
            this.getState().NewTextPost = action.text;
            this.Rerender(this.getState());
        }
        else if(action.type === "SEND-MESSAGE"){
            let size = this.getState().messages.length;
            let message = {
                id: size,
                message: this.getState().newTextMessage,
                idDialog: 2
            }
            this.getState().messages.push(message);
            this.getState().newTextMessage = "";
            this.Rerender(this.getState());
        }

        else if(action.type === "CHANGE-TEXT-MESSAGE"){

            this.getState().newTextMessage = action.text;
            this.Rerender(this.getState());
        }
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

export const AddMessageAction = () =>{
    return {
        type: "SEND-MESSAGE"
    }
}
export const ChangeTextMessageAction = (text) => {
    return {
        type: "CHANGE-TEXT-MESSAGE",
        text: text
    }
}


export default store;