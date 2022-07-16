import React from "react";
import {GetFriends} from "../../../API/API";
import Friend from "./Friend";

class FriendsAPI extends React.Component{

    componentDidMount() {
        this.props.IsFeatchingF(true);
        GetFriends(this.props.pageCount, this.props.sizePage).then(data => {
            this.props.IsFeatchingF(false);
            this.props.setFriends(data.items)
            this.props.setTotalCount(data.totalCount)
        })
    }

    onPageChange = (count) => {
        this.props.setPageCount(count);
        this.props.IsFeatchingF(true);
        GetFriends(count, this.props.sizePage).then(data => {
            this.props.IsFeatchingF(false);
            this.props.setFriends(data.items)
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
        return <Friend
            pages={pages}
            onPageChange={this.onPageChange}
            pageCount={this.props.pageCount}
            friends={this.props.friends}
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

export default FriendsAPI;