import React from 'react';
import userPhoto from "../../../IMG/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../../Preloader";
import Pagination from "../Pagination";

const Users = (props) => {
    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Pagination {...props}/>
            {
                props.users.map(user => props.isFetching ? null : <div className={classes.user} key={user.id}>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt="AVA" src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes.img}/>
                        </NavLink>
                        <div>
                            {user.name}
                        </div>

                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unFollowUserThunk(user.id);
                                    if(props.isFetching ? null : props.onPageChange(props.pageCount));
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.FollowUserThunk(user.id);
                                    if(props.isFetching ? null : props.onPageChange(props.pageCount));
                                }}>Follow</button>}
                        </div>
                    </div>
                )
            }
        </>
    );


}

export default Users;