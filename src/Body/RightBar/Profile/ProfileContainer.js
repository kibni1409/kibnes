import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileAction} from "../../../Redux/ProfileReducer";
import {IsFeatchingF} from "../../../Redux/UsersReducer";

let ProfileContainer = (props) => {
    return <Profile {...props} />
}

let mapStateToProps = (state) =>{
    return {
        profile: state.ProfilePage.profile,
        id: state.Auth.userID,
        isFetching: state.UsersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        setProfile: (user) => {
            let action = ProfileAction(user);
            dispatch(action)
        },
        setIsFeatchinf: (bool) =>{
            let action = IsFeatchingF(bool);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);