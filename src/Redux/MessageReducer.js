let SEND_MESSAGE = "SEND_MESSAGE";
let CHANGE_TEXT_MESSAGE = "CHANGE_TEXT_MESSAGE";

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

let MessageReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE: {
            let messageText = state.newTextMessage;
            let size = state.messages.length;
            return {
                ...state,
                ...state.messages,
                messages: [...state.messages, {id: size, message: messageText, idDialog: 2}],
                newTextMessage: ''
            }
        }
        case CHANGE_TEXT_MESSAGE: {
            return {
                ...state,
                newTextMessage: action.text
            };
        }
        default:
            return state;
    }
}

export const AddMessageAction = () =>{
    return {
        type: "SEND_MESSAGE"
    }
}
export const ChangeTextMessageAction = (text) => {
    return {
        type: "CHANGE_TEXT_MESSAGE",
        text: text
    }
}

export default MessageReducer;