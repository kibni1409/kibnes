import classes from './Posts.module.css';
import Post from "./Post/Post";

function Posts() {
    return (
        <div>
            <Post message="Hi" />
            <Post message="Yooo"/>
        </div>
    );
}

export default Posts;