import classes from './RightBar.module.css';
import {Route, Routes} from "react-router-dom";
import Messages from "./Messages/Messages";
import React from 'react';
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import FriendsContainer from "./Friends/FriendsContainer";


const RightBar = () => {

    return (
        <div className={classes.rightbar_wrapper}>
            <Routes>
                <Route path="profile/" element={<ProfileContainer />}>
                    <Route path=":userID" element={<ProfileContainer />}/>
                </Route>
                <Route path="messages/*" element={<Messages/>}/>
                <Route path="users" element={<UsersContainer/>}/>
                <Route path="friends" element={<FriendsContainer/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </div>
    );
}

export default RightBar;