import classes from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import {Outlet} from "react-router-dom";

const Messages = (props) => {
    return <div className={classes.messages}>
        Messages
        <Dialogs el={props.el}/>
        <Outlet />
    </div>
}

export default Messages;