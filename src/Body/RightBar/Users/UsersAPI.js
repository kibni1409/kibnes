import React from "react";
import * as axios from "axios";
import Users from "./Users";

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
        />

    }
}

export default UsersAPI;