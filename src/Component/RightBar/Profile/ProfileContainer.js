import {connect} from "react-redux";
import {getStatusProfileThunk, InfoProfileThunk, setStatusProfileThunk} from "../../../Redux/ProfileReducer";
import ProfileAPI from "./ProfileAPI";
import {compose} from "redux";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import {getIsAuth, getIsFetching, getProfile, getStatus, getUserId} from "../../../Redux/Selectors";

let mapStateToProps = (state) =>{
    return {
        profile: getProfile(state),
        id: getUserId(state),
        isFetching: getIsFetching(state),
        isAuth: getIsAuth(state),
        status: getStatus(state)
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        InfoProfileThunk: (userID) => {
            dispatch(InfoProfileThunk(userID));
        },
        getStatusProfileThunk: (userID) => {
            dispatch(getStatusProfileThunk(userID))
        },
        setStatusProfileThunk: (status) => {
            dispatch(setStatusProfileThunk(status))
        }

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(ProfileAPI)
