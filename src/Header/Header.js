import classes from './Header.module.css';
import React  from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header_wrapper}>
            {props.isAuth === false ? 'Login' : props.login}
        </div>
    );
}

export default Header;