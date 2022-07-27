import React, {useEffect} from "react";
import Users from "./Users";
import {Navigate, useParams} from "react-router-dom";

const UsersAPI = (props) =>{
    let {UsersType} = useParams();

    let Nav = () =>{
        return <Navigate to="*" />
    }

    useEffect (() => {
        if(UsersType === "all"){

            props.setUsersThunk(1, props.sizePage);
        }
        else if(UsersType === "friends"){
            props.setFriendsThunk(1, props.sizePage)
        }
        else Nav()
    },[UsersType])

    let onPageChange = (count) => {
        if(UsersType === "all"){
            props.setUsersThunk(count, props.sizePage);
        }
        if(UsersType === "friends"){
            props.setFriendsThunk(count, props.sizePage)
        }
    }

    let AllpageCount = Math.ceil(props.totalCount / props.sizePage);
    props.settotalPages(AllpageCount);
    let pages = [];

    for (let i = 1; i <= AllpageCount; i++){
        pages.push(i);
    }

    return (
        <Users
            pages={pages}
            onPageChange={onPageChange}
            {...props}
        />
    )
}

export default UsersAPI;