import React from "react";
import {AddPostAction, ChangeTextPostAction} from "../../../../../Redux/ProfileReduser";
import AreaPost from "./AreaPost";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        TextPost: state.ProfilePage.NewTextPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        ChangeTextPost: (text) => {
            let action = ChangeTextPostAction(text);
           dispatch(action);
        },
        AddPost: (text) => {
            let action = AddPostAction(text);
            dispatch(action);
        }
    }
}


let AreaMessageContainer = connect(mapStateToProps,mapDispatchToProps)(AreaPost);

export default AreaMessageContainer;
