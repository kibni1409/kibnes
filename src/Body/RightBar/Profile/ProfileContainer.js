import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileAction} from "../../../Redux/ProfileReduser";

let ProfileContainer = (props) => {
    return <Profile {...props} />
}

let mapStateToProps = (state) =>{
    return {
        profile: state.ProfilePage.profile,
        id: state.Auth.userID
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