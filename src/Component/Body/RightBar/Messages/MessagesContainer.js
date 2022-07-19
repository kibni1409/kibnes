import {compose} from "redux";
import {connect} from "react-redux";
import withAuthRedirect from "../../../../HOC/withAuthRedirect";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }

}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(Messages)