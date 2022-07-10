import React from 'react';
import classes from "./Users.module.css"

let Users = (props) => {

    let UsersElements = props.users.map(u => {
            return (
                <div className={classes.user}>
                    <img alt="AVA" src={u.ava} className={classes.img}/>
                    <div>
                        {u.secondName} {u.name}
                    </div>
                    <div>
                        {u.follow
                            ? <button onClick={() => {
                                props.UnFollowUsers(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.FollowUsers(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
            )
        }
    );

    let FriendsElements = props.users.map(u => {
            if (u.follow === true) {
                return (
                    <div className={classes.user}>
                        <img alt="AVA" src={u.ava} className={classes.img}/>
                        <div>
                            {u.secondName} {u.name}
                        </div>
                        <div>
                            {u.follow
                                ? <button onClick={() => {
                                    props.UnFollowUsers(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.FollowUsers(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                )
            }
        }
    );

    return (
        <div className={classes.user}>
            <div>
                All Users
                {UsersElements}
            </div>
            <dib>
                Friends
                {FriendsElements}
            </dib>
        </div>

    )
}

export default Users;