import classes from './Profile.module.css';
import React  from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";
import Preloader from "../../Preloader";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import * as axios from "axios";
import ava from "../../../img/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg"

let Profile = (props) => {
    let {userID} = useParams();

    useEffect(() => {
        if(userID === undefined){
            props.setIsFeatchinf(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.id}`).then(response => {
                props.setProfile(response.data);
                props.setIsFeatchinf(false);
            })
        }
        else {
            props.setIsFeatchinf(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
                props.setProfile(response.data)
                props.setIsFeatchinf(false);
            })
        }
    },[userID]);

    if(!props.profile){
        return <Preloader />
    }
    if(props.isFetching === true){
        return <Preloader />
    }
    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.small === null ? ava : props.profile.photos.small } alt="ava"/>
            <div className={classes.info}>
               {userID} {props.profile.fullName}
            </div>
            <PostContainer />
            <AreaPostContainer/>
        </div>
    );
}

export default Profile;