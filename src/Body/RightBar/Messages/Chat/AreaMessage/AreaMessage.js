import classes from './AreaMessage.module.css';
import React from "react";

const AreaMessage = () => {

    let MessageElement = React.createRef ();

    let MessageText = () => {
        alert(MessageElement.current.value)
    }


    return (
        <div className={classes.area_message}>
                <textarea ref={MessageElement} className={classes.textarea}>
                </textarea>
                <button onClick={MessageText} className={classes.button}>
                    Send message
                </button>
        </div>
    );
}

export default AreaMessage;