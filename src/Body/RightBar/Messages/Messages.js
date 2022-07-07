import classes from "./Messages.module.css";

import React  from 'react';
import ChatContainer from "./Chat/ChatContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import AreaMessageContainer from "./Chat/AreaMessage/AreaMessageContainer";

const Messages = () => {
    return(
        <div className={classes.messages}>
            <DialogsContainer/>
            <ChatContainer/>
            <AreaMessageContainer/>
        </div>
    )
}

export default Messages;