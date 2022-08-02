let SEND_MESSAGE = "message/SEND_MESSAGE";

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
    idDialog: number
}

let initialState = {
        dialogs:  [
            {id: 0, name: "Dima"},
            {id: 1, name: "Sveta"},
            {id: 2, name: "Andrey"}
        ] as Array<DialogsType>,
        messages: [
            {id: 0, message: 'Hi', idDialog: 2},
            {id: 1, message: 'Yo', idDialog: 2},
            {id: 2, message: 'Normal', idDialog: 1},
            {id: 3, message: 'Ok', idDialog: 1},
            {id: 4, message: 'Yes, i to', idDialog: 0},
            {id: 5, message: 'I am OK', idDialog: 0}
        ] as Array<MessagesType>
}
export type InitialStateType = typeof initialState;

let MessageReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type){
        case SEND_MESSAGE: {
            let size = state.messages.length;
            return {
                ...state,
                ...state.messages,
                messages: [...state.messages, {id: size, message: action.text, idDialog: 2}],
            }
        }
        default:
            return state;
    }
}
export type AddMessageActionType = {
    type: typeof SEND_MESSAGE
    text: string
}
export const AddMessageAction = (text: string): AddMessageActionType =>{
    return {
        type: "message/SEND_MESSAGE",
        text: text
    }
}

export default MessageReducer;