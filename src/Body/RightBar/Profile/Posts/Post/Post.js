import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.post}>
            {props.message}
        </div>
    );
}

export default Post;