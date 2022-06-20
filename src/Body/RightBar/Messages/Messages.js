import classes from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";
import {Outlet, Route, Router} from "react-router-dom";

const Messages = () => {
    return <div className={classes.messages}>
        <Dialogs/>
        <Outlet />
    </div>
}

export default Messages;