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
            AreaPost
            <div >
                <textarea
                    id="textPost"
                    ref={PostElement}
                    onChange={TextPostChange}
                    value={props.N_el}/>
            </div>
            <div>
                <button onClick={PostText} >
                    Add post
                </button>
            </div>
        </div>
    );
}

export default AreaPost;