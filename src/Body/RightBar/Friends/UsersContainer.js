import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    FollowAC, SetPageCountAC, SetSizePageAC, SetTotalCountAC,
    SetUsersAC,
    UnfollowAC
} from "../../../Redux/UsersReduser";

let mapStateToProps = (state) => {
   return {
       users: state.UsersPage.users,
       totalCount: state.UsersPage.totalCount,
       pageCount: state.UsersPage.pageCount,
       sizePage: state.UsersPage.sizePage
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        FollowUsers: (id) => {
            let action = FollowAC(id);
            dispatch(action);
        },
        UnFollowUsers: (id) => {
            let action = UnfollowAC(id);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = SetUsersAC(users)
            dispatch(action)
        },
        setSizePage: (size) => {
            let action = SetSizePageAC(size)
            dispatch(action)
        },
        setPageCount: (count) => {
            let action = SetPageCountAC(count)
            dispatch(action)
        },
        setTotalCount: (count) => {
            let action = SetTotalCountAC(count)
            dispatch(action)
        }
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;