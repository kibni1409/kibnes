import classes from './AreaPost.module.css';
import React from "react";

const AreaPost = (props) => {
    let PostElement = React.createRef ();

    let onPostText = () => {
        props.AddPost();
    }

    let onTextPostChange = () => {
        let text = PostElement.current.value;
        props.ChangeTextPost(text);
    }


    return (
        <div className={classes.areapost}>
                <textarea className={classes.textarea}
                    id="textPost"
                    ref={PostElement}
                    onChange={onTextPostChange}
                    value={props.TextPost}
                />

                <button onClick={onPostText}  className={classes.button}>
                    Add post
                </button>

        </div>
    );
}

export default AreaPost;