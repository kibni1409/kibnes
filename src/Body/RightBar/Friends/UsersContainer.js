import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    FollowAC, IsFeatchingAC, SetPageCountAC, SetSizePageAC, SetTotalCountAC,
    SetUsersAC,
    UnfollowAC
} from "../../../Redux/UsersReduser";
import * as axios from "axios";


class UsersAPI extends React.Component{
    componentDidMount() {
        this.props.IsFeatchingF(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageCount}&count=${this.props.sizePage}`).then(response => {
            this.props.IsFeatchingF(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChange = (count) => {
        this.props.setPageCount(count);
        this.props.IsFeatchingF(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${count}&count=${this.props.sizePage}`).then(response => {
            this.props.IsFeatchingF(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    render() {

        //let pageCount = Math.ceil(this.props.totalCount / this.props.sizePage);
        let pages = [];
        for (let i = 1; i <= 10; i++){
            pages.push(i);
        }
        return <Users
            pages={pages}
            onPageChange={this.onPageChange}
            pageCount={this.props.pageCount}
            users={this.props.users}
            isFeatching={this.props.isFetching}
        />

    }
}

let mapStateToProps = (state) => {
   return {
       users: state.UsersPage.users,
       totalCount: state.UsersPage.totalCount,
       pageCount: state.UsersPage.pageCount,
       sizePage: state.UsersPage.sizePage,
       isFetching: state.UsersPage.isFetching
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
            let action = SetUsersAC(users);
            dispatch(action);
        },
        setSizePage: (size) => {
            let action = SetSizePageAC(size);
            dispatch(action);
        },
        setPageCount: (count) => {
            let action = SetPageCountAC(count);
            dispatch(action);
        },
        setTotalCount: (count) => {
            let action = SetTotalCountAC(count);
            dispatch(action);
        },
        IsFeatchingF: (bool) => {
            let action = IsFeatchingAC(bool);
            dispatch(action);
        }
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);

export default UsersContainer;