let SEND_MESSAGE = "SEND-MESSAGE";
let CHANGE_TEXT_MESSAGE = "CHANGE-TEXT-MESSAGE";

let initialState = {
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
        newTextMessage: 'ee'
}

let MessageReduser = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:

            let size = state.messages.length;
            let message = {
                id: size,
                message: state.newTextMessage,
                idDialog: 2
            }
            state.messages.push(message);
            state.newTextMessage = "";
            return state;

        case CHANGE_TEXT_MESSAGE:

            state.newTextMessage = action.text;
            return state;

        default:
            return state;
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

export default MessageReduser;