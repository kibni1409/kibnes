import {compose} from "redux";
import {connect} from "react-redux";
import withAuthRedirect from "../../../../HOC/withAuthRedirect";
import Messages from "./Messages";
import {getIsAuth} from "../../../../Redux/Selectors";

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state)
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