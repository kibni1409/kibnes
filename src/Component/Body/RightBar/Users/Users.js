import React from 'react';
import userPhoto from "../../../../IMG/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../../Preloader";

let Users = (props) => {
    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <div>
                {
                    props.pages.map(p => {
                        if (p === 1) {
                            return <span onClick={() => {
                                props.onPageChange(p)
                            }} key={p}
                                         className={props.pageCount === p ? classes.active : classes.pagination}>{p}</span>
                        }

                        if ((1 < p) && (p <= props.pageCount - 3)) {
                            props.setcountDoteStart(true);
                        }
                        if ((props.countDoteStart === true) && (props.pageCount - 3 === p)) {
                            return <span key={p}>...</span>
                        }

                        if ((props.totalPages > p) && (p >= props.pageCount + 3)) {
                            props.setcountDoteEnd(true);
                        }
                        if ((props.countDoteEnd === true) && (props.pageCount + 3 === p) && (props.pageCount + 3 !== props.totalPages)) {
                            return <span key={p}>...</span>
                        }

                        if (props.pageCount - 2 === p || props.pageCount - 1 === p || props.pageCount === p || props.pageCount + 2 === p || props.pageCount + 1 === p) {
                            return <span onClick={() => {
                                props.onPageChange(p)
                            }} key={p}
                                         className={props.pageCount === p ? classes.active : classes.pagination}>{p}</span>
                        }

                        if (props.totalPages === p) {
                            return <span onClick={() => {
                                props.onPageChange(p)
                            }} key={p}
                                         className={props.pageCount === p ? classes.active : classes.pagination}>{p}</span>
                        }


                    })
                }
            </div>
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