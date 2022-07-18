import React from "react";
import Friend from "./Friend";

class FriendsAPI extends React.Component{

    componentDidMount() {
        this.props.setFriendsThunk(this.props.pageCount, this.props.sizePage)
    }

    onPageChange = (count) => {
        this.props.setFriendsThunk(count, this.props.sizePage)
    }
    render() {
        let AllpageCount = Math.ceil(this.props.totalCount / this.props.sizePage);
        this.props.setTotalPages(AllpageCount);
        let pages = [];
        for (let i = 1; i <= AllpageCount; i++){
            pages.push(i);
        }
        return <Friend
            pages={pages}
            onPageChange={this.onPageChange}
            {...this.props}
        />
    }
}

export default FriendsAPI;