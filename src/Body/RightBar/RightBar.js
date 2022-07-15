import classes from './RightBar.module.css';
import {Route, Routes} from "react-router-dom";
import Messages from "./Messages/Messages";
import React from 'react';
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";


const RightBar = () => {

    return (
        <div className={classes.rightbar_wrapper}>
            <Routes>
                <Route path="profile/:userID" element={<ProfileContainer />}/>
                <Route path="messages/*" element={<Messages/>}/>
                <Route path="users" element={<UsersContainer/>}/>
            </Routes>
        </div>
    );
}

export default RightBar;