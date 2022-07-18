import React, {useEffect} from "react";
import Users from "./Users";

const UsersAPI= (props) =>{

    useEffect (() =>{
        props.setUsersThunk(props.pageCount, props.sizePage);
    },[props.users.follow])

    let onPageChange = (count) => {
        props.setUsersThunk(count, props.sizePage);
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