import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let ElementPost = props.el.map( post => <Post text={post.texts}/>)

    return (
        <div className={classes.post}>
            Posts
            {ElementPost}
        </div>
    );
}

export default Posts;