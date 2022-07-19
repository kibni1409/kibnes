import classes from './Post.module.css';
import React  from 'react';

const Post = (props) => {
    return (
        <div className={classes.post}>
            {props.text}
        </div>
    );
}

export default Post;