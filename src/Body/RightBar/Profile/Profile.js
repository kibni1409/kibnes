import classes from './Profile.module.css';
import React  from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";
import Preloader from "../../Preloader";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import * as axios from "axios";
import ava from "../../../img/ava.png"

let Profile = (props) => {

    let {userID} = useParams();
    console.log(userID);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            props.setProfile(response.data)
        })
    },[userID]);

    if(!props.profile){
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