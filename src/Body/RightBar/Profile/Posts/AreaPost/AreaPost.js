import classes from './AreaPost.module.css';
import React from "react";
import {AddPostAction, ChangeTextAction} from "../../../../../Redux/State";


const AreaPost = (props) => {

    let PostElement = React.createRef ();

    let PostText = () => {
        let text = PostElement.current.value;
        let action = AddPostAction(text);
        props.dispatch(action);
    }

    let TextPostChange = () => {
        let text = PostElement.current.value;
        let action = ChangeTextAction(text);
        props.dispatch(action);
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