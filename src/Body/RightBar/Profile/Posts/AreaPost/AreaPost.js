import classes from './AreaPost.module.css';
import React from "react";

const AreaPost = (props) => {

    let PostElement = React.createRef ();

    let PostText = () => {
        let text = PostElement.current.value;
        props.Addpost(text);
    }

    let TextPostChange = () => {
        let text = PostElement.current.value;
        props.ChangeTextPost(text);
    }


    return (
        <div className={classes.areapost}>
                <textarea className={classes.textarea}
                    id="textPost"
                    ref={PostElement}
                    onChange={TextPostChange}
                    value={props.N_el}/>

                <button onClick={PostText}  className={classes.button}>
                    Add post
                </button>

        </div>
    );
}

export default AreaPost;