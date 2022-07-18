import classes from './Header.module.css';
import React  from 'react';

const Header = (props) => {
    return (
        <div className={classes.header_wrapper}>
            {props.isAuth === false ? 'Unknown Login' : props.login}
        </div>
    );
}

export default Header;