import classes from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import {Outlet} from "react-router-dom";
import AreaMessage from "./Chat/AreaMessage/AreaMessage";

const Messages = (props) => {
    return <div className={classes.messages}>
        <Dialogs D_el={props.D_el}/>
        <Outlet />
        {/*<AreaMessage n_el={props.n_el} dispatch={props.dispatch}/>*/}
    </div>
}

export default Messages;