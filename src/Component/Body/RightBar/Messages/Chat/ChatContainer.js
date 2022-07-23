import {connect} from "react-redux";
import Chat from "./Chat";
import {getMessage} from "../../../../../Redux/Selectors";

let mapStateToProps = (state) =>{
    return {
        Message_elements: getMessage(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat);


export default ChatContainer;