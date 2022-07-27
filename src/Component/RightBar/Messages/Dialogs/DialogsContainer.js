import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {getDialogs} from "../../../../Redux/Selectors";

let mapStateToProps = (state) =>{
    return {
        Dialog_elements: getDialogs(state)
    }
}

let DialogsContainer = connect(mapStateToProps,null)(Dialogs);

export default DialogsContainer;