import React from "react";
import {connect} from "react-redux";
import {
    IsFeatchingF, setCountDoteEnd, setCountDoteStart, setPageCount, setSizePage, setTotalCount, setTotalPages,
    FollowFriends, UnFollowFriends, setFriends
} from "../../../Redux/FriendsReduser";
import FriendsAPI from "./FriendsAPI";


let mapStateToProps = (state) => {
   return {
       friends: state.FriendsPage.friends,
       totalCount: state.FriendsPage.totalCount,
       pageCount: state.FriendsPage.pageCount,
       sizePage: state.FriendsPage.sizePage,
       isFetching: state.FriendsPage.isFetching,
       totalPages: state.FriendsPage.totalPages,
       countDoteStart: state.FriendsPage.countDoteStart,
       countDoteEnd: state.FriendsPage.countDoteEnd
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        FollowUsers: (id) => {
            let action = FollowFriends(id);
            dispatch(action);
        },
        UnFollowUsers: (id) => {
            let action = UnFollowFriends(id);
            dispatch(action);
        },
        setFriends: (friends) => {
            let action = setFriends(friends);
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

let FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(FriendsAPI);

export default FriendsContainer;