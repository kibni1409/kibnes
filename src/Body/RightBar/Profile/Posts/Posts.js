import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={classes.post}>
            Posts
            <Post message="Hi" />
            <Post message="Yooorrrrrrrrrrrr"/>
        </div>
    );
}

export default Posts;