import React from "react";
import Users from "./Users";
import {GetUsers} from "../../../API/API";

class UsersAPI extends React.Component{

    componentDidMount() {
        this.props.IsFeatchingF(true);
        GetUsers(this.props.pageCount, this.props.sizePage).then(data => {
            this.props.IsFeatchingF(false);
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    onPageChange = (count) => {
        this.props.setPageCount(count);
        this.props.IsFeatchingF(true);
        GetUsers(count, this.props.sizePage).then(data => {
            this.props.IsFeatchingF(false);
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }
    render() {

        let AllpageCount = Math.ceil(this.props.totalCount / this.props.sizePage);
        this.props.settotalPages(AllpageCount);
        let pages = [];

        for (let i = 1; i <= AllpageCount; i++){
            pages.push(i);
        }
        return <Users
            pages={pages}
            onPageChange={this.onPageChange}
            pageCount={this.props.pageCount}
            users={this.props.users}
            isFeatching={this.props.isFetching}
            totalCount={this.props.totalCount}
            totalPages={this.props.totalPages}
            setTotalPages={this.props.settotalPages}
            setcountDoteStart={this.props.setcountDoteStart}
            setcountDoteEnd={this.props.setcountDoteEnd}
            countDoteStart={this.props.countDoteStart}
            countDoteEnd={this.props.countDoteEnd}
            FollowUsers={this.props.FollowUsers}
            UnFollowUsers={this.props.UnFollowUsers}
        />

    }
}

export default UsersAPI;