import classes from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import {Outlet} from "react-router-dom";
import AreaMessage from "./Chat/AreaMessage/AreaMessage";

const Messages = (props) => {
    return <div className={classes.messages}>
        <Dialogs el={props.el}/>
        <Outlet />
        <AreaMessage/>
    </div>
}

export default Messages;