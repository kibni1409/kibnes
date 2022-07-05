import classes from './AreaMessage.module.css';
import React from "react";
import {AddMessageAction,ChangeTextMessageAction} from "../../../../../Redux/MessageReduser";

const AreaMessage = (props) => {

    let MessageElement = React.createRef ();

    let MessageText = () => {
        let text = MessageElement.current.value;
        let action = AddMessageAction(text);
        props.dispatch(action);
    }

    let TextMessageChange = () => {
        let text = MessageElement.current.value;
        let action = ChangeTextMessageAction(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.area_message}>
                <textarea className={classes.textarea}
                    id="textMessage"
                    ref={MessageElement}
                    onChange={TextMessageChange}
                    value={props.n_el}
                />

                <button onClick={MessageText} className={classes.button}>
                    Send message
                </button>
        </div>
    );
}

export default AreaMessage;