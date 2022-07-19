import classes from './Profile.module.css';
import React  from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";
import ava from "../../../../IMG/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg"

let Profile = (props) => {

    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.small === null ? ava : props.profile.photos.small } alt="ava"/>
            <div className={classes.info}>
               ID={props.profile.userId} FullName={props.profile.fullName}
            </div>
            <PostContainer />
            <AreaPostContainer/>
        </div>
    );
}

export default Profile;