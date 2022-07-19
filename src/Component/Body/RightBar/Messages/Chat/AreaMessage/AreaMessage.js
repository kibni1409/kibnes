import classes from './AreaMessage.module.css';
import React from "react";

const AreaMessage = (props) => {

    let MessageElement = React.createRef ();

    let onMessageText = () => {
        let text = MessageElement.current.value;
        props.MessageText(text);
    }

    let onTextMessageChange = () => {
        let text = MessageElement.current.value;
        props.TextMessageChange(text);
    }

    return (
        <div className={classes.area_message}>
                <textarea className={classes.textarea}
                    id="textMessage"
                    ref={MessageElement}
                    onChange={onTextMessageChange}
                    value={props.TextMessage}
                />

                <button onClick={onMessageText} className={classes.button}>
                    Send message
                </button>
        </div>
    );
}

export default AreaMessage;