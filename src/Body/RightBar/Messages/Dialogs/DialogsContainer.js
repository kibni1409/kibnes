import {connect} from "react-redux";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) =>{
    return {
        Dialog_elements: state.MessagePage.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}


let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;