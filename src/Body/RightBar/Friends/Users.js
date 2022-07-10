import React from 'react';
import classes from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../../../img/ava.png"

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        console.log(this.props.users)
        return <div>
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