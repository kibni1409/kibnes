import React  from 'react';
import Preloader from "../../Preloader";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Profile from "./Profile";


let ProfileAPI = (props) => {
    let {userID} = useParams();

    useEffect(() => {
        if(userID === "my"){
            props.InfoProfileThunk(props.id);
            props.getStatusProfileThunk(props.id);
        }
        else {
            props.InfoProfileThunk(userID);
            props.getStatusProfileThunk(userID);
        }
    },[userID]);

    if(!props.profile){
        return <Preloader />
    }
    if(props.isFetching === true){
        return <Preloader />
    }
    return <Profile {...props}/>;
}

export default ProfileAPI;