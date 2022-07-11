import React from 'react';
import * as axios from "axios";
import userPhoto from "../../../img/ava.png";
import classes from "./Users.module.css";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageCount}&count=${this.props.sizePage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPageChange = (count) => {
        this.props.setPageCount(count);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${count}&count=${this.props.sizePage}`).then(response => {
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
        console.log(pages);
        return <div>
            <div>
                {pages.map(p => {
                   return <span onClick={() => {this.onPageChange(p)}} className={this.props.pageCount === p ? classes.active : ""}>{p}/</span>
                })
                }
            </div>
                {

                    this.props.users.map(user => <div className={classes.user} key={user.id}>
                            <img alt="AVA" src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.img}/>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        this.props.UnFollowUsers(user.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.FollowUsers(user.id)
                                    }}>Follow</button>}
                            </div>
                    </div>
                    )
                }
            </div>

    }
}

export default Users;