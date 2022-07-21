import classes from './Header.module.css';
import React  from 'react';

const Header = (props) => {

    return (
        <div className={classes.header_wrapper}>
            {props.isAuth === true ?  <div className={classes.login}> {props.login} - <button onClick={props.logout}>Logout</button> </div> : 'Unknown Login'}
        </div>
    );
}

export default Header;