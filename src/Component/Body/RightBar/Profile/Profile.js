import classes from './Profile.module.css';
import React  from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";
import ava from "../../../../IMG/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg"
import ProfileStatus from "./Posts/ProfileStatus";
import {useParams} from "react-router-dom";

let Profile = (props) => {

    let {userID} = useParams();

    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.small === null ? ava : props.profile.photos.small } alt="ava"/>
            <div className={classes.info}>
               ID={props.profile.userId} FullName={props.profile.fullName} 
            </div>
            <ProfileStatus status={props.status} setStatus={props.setStatusProfileThunk} userID={userID}/>
            <PostContainer />
            <AreaPostContainer/>
        </div>
    );
}

export default Profile;