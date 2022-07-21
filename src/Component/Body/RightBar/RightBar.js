import classes from './RightBar.module.css';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import Login from "./Login/LoginContainer";


const RightBar = () => {

    return (
        <div className={classes.rightbar_wrapper}>
            <Routes>
                <Route path="" element={<ProfileContainer/>}/>
                <Route path="profile/" element={<ProfileContainer />}>
                    <Route path=":userID" element={<ProfileContainer />}/>
                </Route>
                <Route path="messages/*" element={<MessagesContainer/>}/>
                <Route path="users" element={<UsersContainer/>}/>
                <Route path="friends" element={<FriendsContainer/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </div>
    );
}

export default RightBar;