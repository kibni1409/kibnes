import {connect} from "react-redux";
import AreaMessage from "./AreaMessage";
import {AddMessageAction} from "../../../../../../Redux/MessageReducer";

let mapStateToProps = (state) =>{
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        MessageText: (text) => {
            let action = AddMessageAction(text);
            dispatch(action);
        }
    }
}


let AreaMessageContainer = connect(mapStateToProps,mapDispatchToProps)(AreaMessage);

export default AreaMessageContainer;