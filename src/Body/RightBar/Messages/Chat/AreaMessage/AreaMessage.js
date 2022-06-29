import classes from './AreaMessage.module.css';
import React from "react";

const AreaMessage = () => {

    let MessageElement = React.createRef ();

    let MessageText = () => {
        alert(MessageElement.current.value)
    }


    return (
        <div className={classes.area_message}>
            AreaPost
            <div >
                <textarea ref={MessageElement}>
                    Text message
                </textarea>
            </div>
            <div>
                <button onClick={MessageText} >
                    Send message
                </button>
            </div>
        </div>
    );
}

export default AreaMessage;