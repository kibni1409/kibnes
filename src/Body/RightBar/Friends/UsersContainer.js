import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, UnfollowAC} from "../../../Redux/UsersReduser";

let mapStateToProps = (state) => {
   return {
       users: state.UsersPage.users
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
        }
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;