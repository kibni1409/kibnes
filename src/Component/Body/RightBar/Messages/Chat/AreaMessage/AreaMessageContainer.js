import {connect} from "react-redux";
import AreaMessage from "./AreaMessage";
import {AddMessageAction, ChangeTextMessageAction} from "../../../../../../Redux/MessageReducer";

let mapStateToProps = (state) =>{
    return {
        TextMessage: state.MessagePage.newTextMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        MessageText: (text) => {
            let action = AddMessageAction(text);
            dispatch(action);
        },
        TextMessageChange: (text) => {
            let action = ChangeTextMessageAction(text);
            dispatch(action);
        }
    }
}


let AreaMessageContainer = connect(mapStateToProps,mapDispatchToProps)(AreaMessage);

export default AreaMessageContainer;