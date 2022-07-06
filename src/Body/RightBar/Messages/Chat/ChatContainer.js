import React from 'react';
import Chat from "./Chat";
import classes from "../Messages.module.css";
import Dialogs from "../Dialogs/Dialogs";
import {AddMessageAction, ChangeTextMessageAction} from "../../../../Redux/MessageReduser";
import AreaMessage from "./AreaMessage/AreaMessage";
import StoreContext from "../../../../Store-Context";


const ChatContainer = () => {

    return <StoreContext.Consumer>
        { store => {

            let state = store.getState();

            let MessageText = (text) => {
                let action = AddMessageAction(text);
                store.dispatch(action);
            }

            let TextMessageChange = (text) => {
                let action = ChangeTextMessageAction(text);
                store.dispatch(action);
            }
            return (
                <div className={classes.messages}>
                    <Dialogs
                        Dialog_elements={state.MessagePage.dialogs}
                    />
                    <Chat
                        dispatch={store.dispatch}
                        Message_elements={state.MessagePage.messages}
                    />
                    <AreaMessage
                        AddMessageAction={MessageText}
                        ChangeTextMessageAction={TextMessageChange}
                        TextMessage={state.MessagePage.newTextMessage}
                    />
                </div>
            )
        }}
    </StoreContext.Consumer>

}

export default ChatContainer;