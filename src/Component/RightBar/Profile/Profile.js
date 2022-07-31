import classes from './Profile.module.css';
import React from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";

import ProfileStatus from "./ProfileStatus";
import {useParams} from "react-router-dom";
import Contacts from "./Contacts";
import PhotoProfile from "./PhotoProfile";


const Profile = (props) => {

    let {userID} = useParams();

    return (
        <div className={classes.profile}>
            <PhotoProfile profile={props.profile} savePhoto={props.savePhoto} userID={userID} />
            <div className={classes.info}>
                ID: {props.profile.userId} FullName: {props.profile.fullName}
            </div>
            <ProfileStatus status={props.status} setStatus={props.setStatusProfileThunk} userID={userID}/>
            <div>
                About me: {props.profile.aboutMe}
                <Contacts profile={props.profile} userID={userID} setContactsThunk={props.setContactsThunk} InfoProfileThunk={props.InfoProfileThunk}/>
            </div>
            <PostContainer/>
            {userID === "my" ? <AreaPostContainer/> : null}
        </div>
    );
}

export default Profile;