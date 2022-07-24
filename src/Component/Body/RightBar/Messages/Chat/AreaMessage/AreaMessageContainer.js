import {connect} from "react-redux";
import AreaMessage from "./AreaMessage";
import {AddMessageAction} from "../../../../../../Redux/MessageReducer";

let mapDispatchToProps = (dispatch) => {
    return {
        MessageText: (text) => {
            let action = AddMessageAction(text);
            dispatch(action);
        }
    }
}


let AreaMessageContainer = connect(null,mapDispatchToProps)(AreaMessage);

export default AreaMessageContainer;