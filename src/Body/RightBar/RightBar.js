import classes from './RightBar.module.css';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Messages from "./Messages/Messages";
import React from 'react';


const RightBar = () => {
    return (
        <div className={classes.rightbar_wrapper}>
            <Routes>
                <Route path="profile" element={<Profile/>}/>
                <Route path="messages/*" element={<Messages/>}/>
            </Routes>
        </div>
    );
}

export default RightBar;