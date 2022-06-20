import classes from './LeftBar.module.css';
import {NavLink} from "react-router-dom";

const LeftBar = () => {
    return (
            <div className={classes.leftbar_wrapper}>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/messages">Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/friends">Friends</NavLink>
                </div>
            </div>
    );
}

export default LeftBar;