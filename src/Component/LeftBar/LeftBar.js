import classes from './LeftBar.module.css';
import {NavLink} from "react-router-dom";
import React  from 'react';

const LeftBar = () => {
    return (
            <div className={classes.leftbar_wrapper}>
                <div  className={`${classes.item}  ${classes.active}`}>
                    <NavLink  to="/profile/my">Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/messages">Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users/all">Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users/friends">Friends</NavLink>
                </div>

            </div>
    );
}

export default LeftBar;