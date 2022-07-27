import classes from "./Users/Users.module.css";
import React from "react";

const Pagination = (props) => {
    return (
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
    )
}

export default Pagination;