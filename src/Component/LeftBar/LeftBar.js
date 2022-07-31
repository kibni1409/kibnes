import classes from './LeftBar.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from 'react';
import classNames from "classnames"

const LeftBar = () => {

    // let [isActiveProfile, editActiveProfile] = useState(false);
    // let [isActiveMessages, editActiveMessages] = useState(false);
    // let [isActiveUsers, editActiveUsers] = useState(false);
    // let [isActiveFriends, editActiveFriends] = useState(false);
    //
    // const Activator = (profile = false, messages = false, users = false, friends = false) => () => {
    //     editActiveProfile(profile);
    //     editActiveMessages(messages);
    //     editActiveUsers(users);
    //     editActiveFriends(friends);
    // }

    return (
        <div className={classes.leftbar_wrapper}>
            {/*{isActiveProfile*/}
            {/*    ? <div  className={classNames(classes.item, classes.active)}>*/}
            {/*        <NavLink onClick={Activator(true)} to="/profile/my">Profile</NavLink>*/}
            {/*    </div>*/}
            {/*    : <div  className={classes.item}>*/}
            {/*        <NavLink onClick={Activator(true)} to="/profile/my">Profile</NavLink>*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{isActiveMessages*/}
            {/*    ? <div  className={classNames(classes.item, classes.active)}>*/}
            {/*        <NavLink onClick={Activator(null, true)} to="/messages">Messages</NavLink>*/}
            {/*    </div>*/}
            {/*    : <div  className={classes.item}>*/}
            {/*        <NavLink onClick={Activator(null, true)} to="/messages">Messages</NavLink>*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{isActiveUsers*/}
            {/*    ? <div  className={classNames(classes.item, classes.active)}>*/}
            {/*        <NavLink onClick={Activator(null,null,true)} to="/users/all">Users</NavLink>*/}
            {/*    </div>*/}
            {/*    : <div  className={classes.item}>*/}
            {/*        <NavLink onClick={Activator(null,null,true)} to="/users/all">Users</NavLink>*/}
            {/*    </div>*/}
            {/*}*/}
            {/*{isActiveFriends*/}
            {/*    ? <div  className={classNames(classes.item, classes.active)}>*/}
            {/*        <NavLink onClick={Activator(null,null,null,true)} to="/users/friends">Friends</NavLink>*/}
            {/*    </div>*/}
            {/*    : <div  className={classes.item}>*/}
            {/*        <NavLink onClick={Activator(null,null,null,true)} to="/users/friends">Friends</NavLink>*/}
            {/*    </div>*/}
            {/*}*/}

            <div  className={classes.item}>
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
)
    ;
}

export default LeftBar;