import classes from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let ElementPost = props.P_el.map( post => <Post text={post.text}/>)
    return (
        <div className={classes.post}>
            Posts
            {ElementPost}
        </div>
    );
}

export default Posts;