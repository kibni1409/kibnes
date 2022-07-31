import ava from "../../../IMG/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg";
import React from "react";

const PhotoProfile = (props) => {

    let onChangePhoto = (e) => {
        if(e.target.files.length) {
            props.savePhoto(props.profile.userId)
        }
    }

    return(
    <form>
        <img src={props.profile.photos.large === null ? ava : props.profile.photos.large} alt="ava"/><br/>
        {props.userID === "my"
        ?<input type={"file"} onChange={onChangePhoto} id="photo"></input>
        : null
        }
    </form>
    )
}

export default PhotoProfile;