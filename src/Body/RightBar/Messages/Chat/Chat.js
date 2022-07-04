import classes from "./Chat.module.css";
import Message from "./Message/Message";


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
        </div>
    )
}

export default Chat;