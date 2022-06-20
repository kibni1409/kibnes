import classes from "./Chat.module.css";
import Message from "./Message/Message";

const Chat = () => {
    return <div className={classes.chat}>
        Chat
        <Message message="Hi"/>
        <Message message="Yoooo"/>
        <Message message="Gggg"/>
        <Message message="I like dog"/>
        <Message message="Nice"/>

    </div>
}

export default Chat;