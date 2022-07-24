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

export default compose(
    connect(mapStateToProps,null),
    withAuthRedirect,
)(Messages)