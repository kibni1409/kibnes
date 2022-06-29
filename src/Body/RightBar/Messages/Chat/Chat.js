import classes from "./Chat.module.css";
import Message from "./Message/Message";


const Chat = (props) => {

    let MessagesElement = props.el.map(message => {
            if (message.idDialog == 1) {
               return (<Message message={message.message}/>)
            }
        }
    )

    return (
        <div className={classes.chat}>
            Chat
            {MessagesElement}
        </div>
    )
}

export default Chat;