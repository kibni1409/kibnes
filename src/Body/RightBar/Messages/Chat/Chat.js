import classes from "./Chat.module.css";
import React  from 'react';
import Message from "./Message/Message";
import AreaMessage from "./AreaMessage/AreaMessage";


const Chat = (props) => {

    let MessagesElement = props.M_el.map(message => {
            if (message.idDialog == 2) {
               return (<Message message={message.message}/>)
            }
        }
    )

    return (
        <div className={classes.chat}>
            Chat
            {MessagesElement}
            <AreaMessage n_el={props.n_el} dispatch={props.dispatch}/>
        </div>
    )
}

export default Chat;