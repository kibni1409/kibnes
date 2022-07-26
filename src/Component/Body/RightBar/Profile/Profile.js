import classes from './Profile.module.css';
import React  from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";
import ava from "../../../../IMG/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg"
import ProfileStatus from "./ProfileStatus";
import {useParams} from "react-router-dom";

const Profile = (props) => {

    let {userID} = useParams();

    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.large === null ? ava : props.profile.photos.large } alt="ava"/>
            <div className={classes.info}>
               ID={props.profile.userId} FullName={props.profile.fullName}
            </div>
            <ProfileStatus status={props.status} setStatus={props.setStatusProfileThunk} userID={userID}/>
            <PostContainer />
            {userID === "my" ? <AreaPostContainer/> : null} 
        </div>
    );
}

export default Profile;