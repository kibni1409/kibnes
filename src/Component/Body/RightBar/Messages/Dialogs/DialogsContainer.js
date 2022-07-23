import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {getDialogs} from "../../../../../Redux/Selectors";

let mapStateToProps = (state) =>{
    return {
        Dialog_elements: getDialogs(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;