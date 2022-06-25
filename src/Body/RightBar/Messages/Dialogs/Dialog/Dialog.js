import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return <div className={classes.dialog}>
        <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
    </div>
}

export default Dialog;