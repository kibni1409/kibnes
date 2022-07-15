import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileAction} from "../../../Redux/ProfileReduser";

let ProfileContainer = (props) => {
    return <Profile {...props} profile={props.profile}/>
}

let mapStateToProps = (state) =>{
    return {
        profile: state.ProfilePage.profile
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        setProfile: (user) => {
            let action = ProfileAction(user);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);