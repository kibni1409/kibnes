import classes from './Posts.module.css';
import Post from "./Post/Post";
import React  from 'react';

const Posts = (props) => {
    let ElementPost = props.Posts.map( post => <Post text={post.text}/>)
    return (
        <div className={classes.post}>
            Posts
            {ElementPost}
        </div>
    );
}

export default Posts;