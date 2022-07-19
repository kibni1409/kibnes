import {connect} from "react-redux";
import {InfoProfileThunk} from "../../../../Redux/ProfileReducer";
import ProfileAPI from "./ProfileAPI";
import {compose} from "redux";
import withAuthRedirect from "../../../../HOC/withAuthRedirect";

let mapStateToProps = (state) =>{
    return {
        profile: state.ProfilePage.profile,
        id: state.Auth.userID,
        isFetching: state.UsersPage.isFetching,
        isAuth: state.Auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        InfoProfileThunk: (userID) => {
            dispatch(InfoProfileThunk(userID));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(ProfileAPI)
