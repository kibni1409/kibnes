import classes from './Body.module.css';
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import React  from 'react';

const Body = () => {
    return (
        <div className={classes.body_wrapper}>
                <LeftBar/>
                <RightBar/>
        </div>
    );
}

export default Body;