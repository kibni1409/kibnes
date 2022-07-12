import React from 'react';
import userPhoto from "../../../img/ava.png";
import classes from "./Users.module.css";
import preloader from "../../../img/XOsX.gif"

let Users = (props) => {
    return (
        <>
            {props.isFeatching ? <div><img alt="aaa" src={preloader}/></div> : null}
            <div>
                {
                    props.pages.map(p => {
                        if (p === 1) {
                            return <span onClick={() => {
                                props.onPageChange(p)
                            }} key={p} className={props.pageCount === p ? classes.active : classes.pagination}>{p}</span>
                        }

                        if ((1 < p) && (p <= props.pageCount - 3)){
                            props.setcountDoteStart(true);
                        }
                        if ((props.countDoteStart === true) && (props.pageCount - 3 === p)){
                            return <span key={p} >...</span>
                        }

                        if ((props.totalPages > p) && (p >= props.pageCount + 3)){
                            props.setcountDoteEnd(true);
                        }
                        if ((props.countDoteEnd === true) && (props.pageCount + 3 === p) && (props.pageCount + 3 !== props.totalPages)){
                            return <span key={p} >...</span>
                        }

                        if (props.pageCount - 2 === p || props.pageCount - 1 === p || props.pageCount === p || props.pageCount + 2 === p || props.pageCount + 1 === p) {
                            return <span onClick={() => {
                                props.onPageChange(p)
                            }} key={p} className={props.pageCount === p ? classes.active : classes.pagination}>{p}</span>
                        }

                        if (props.totalPages === p) {
                            return <span onClick={() => {
                                props.onPageChange(p)
                            }} key={p} className={props.pageCount === p ? classes.active : classes.pagination}>{p}</span>
                        }


                })
                }
            </div>
            {

                props.users.map(user => props.isFeatching ? null : <div className={classes.user} key={user.id}>
                        <img alt="AVA" src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={classes.img}/>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.UnFollowUsers(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.FollowUsers(user.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                )
            }
        </>
    );


}

export default Users;