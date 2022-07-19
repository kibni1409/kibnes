import {connect} from "react-redux";
import {InfoProfileThunk} from "../../../Redux/ProfileReducer";
import ProfileAPI from "./ProfileAPI";

let mapStateToProps = (state) =>{
    return {
        profile: state.ProfilePage.profile,
        id: state.Auth.userID,
        isFetching: state.UsersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        InfoProfileThunk: (userID) => {
            dispatch(InfoProfileThunk(userID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAPI);