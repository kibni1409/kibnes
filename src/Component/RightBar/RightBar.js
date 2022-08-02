import classes from './RightBar.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import React from 'react';
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/LoginContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";

// const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));
// const MessagesContainer = React.lazy(() => import("./Messages/MessagesContainer"));


const RightBar = () => {

    return (
        <div className={classes.rightbar_wrapper}>
            <Routes>
                <Route path="profile/" element={<ProfileContainer />}>
                    <Route path=":userID" element={<ProfileContainer />}/>
                </Route>
                <Route path="messages/*" element={<MessagesContainer/>}>
                    <Route path=":dialogID" element={<MessagesContainer/>}/>
                </Route>
                <Route path="users/" element={<UsersContainer />}>
                    <Route path=":UsersType" element={<UsersContainer />}/>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<Navigate to="profile/my"/>}/>
            </Routes>
        </div>
    );
}

export default RightBar;