import React from "react";
import {connect} from "react-redux";
import {
    FollowUsers, IsFeatchingF, setCountDoteEnd, setCountDoteStart, setPageCount, setSizePage, setTotalCount, setTotalPages,
    setUsers,
    UnFollowUsers
} from "../../../Redux/UsersReduser";
import UsersAPI from "./UsersAPI";


let mapStateToProps = (state) => {
   return {
       users: state.UsersPage.users,
       totalCount: state.UsersPage.totalCount,
       pageCount: state.UsersPage.pageCount,
       sizePage: state.UsersPage.sizePage,
       isFetching: state.UsersPage.isFetching,
       totalPages: state.UsersPage.totalPages,
       countDoteStart: state.UsersPage.countDoteStart,
       countDoteEnd: state.UsersPage.countDoteEnd
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        FollowUsers: (id) => {
            let action = FollowUsers(id);
            dispatch(action);
        },
        UnFollowUsers: (id) => {
            let action = UnFollowUsers(id);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsers(users);
            dispatch(action);
        },
        setSizePage: (size) => {
            let action = setSizePage(size);
            dispatch(action);
        },
        setPageCount: (count) => {
            let action = setPageCount(count);
            dispatch(action);
        },
        setTotalCount: (count) => {
            let action = setTotalCount(count);
            dispatch(action);
        },
        IsFeatchingF: (bool) => {
            let action = IsFeatchingF(bool);
            dispatch(action);
        },
        settotalPages: (count) =>{
            let action = setTotalPages(count);
            dispatch(action);
        },
        setcountDoteStart: (dote) => {
            let action = setCountDoteStart(dote);
            dispatch(action);
        },
        setcountDoteEnd: (dote) => {
            let action = setCountDoteEnd(dote);
            dispatch(action);
        }
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);

export default UsersContainer;