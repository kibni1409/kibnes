let SEND_MESSAGE = "SEND-MESSAGE";
let CHANGE_TEXT_MESSAGE = "CHANGE-TEXT-MESSAGE";

let MessageReduser = (state, action) => {
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