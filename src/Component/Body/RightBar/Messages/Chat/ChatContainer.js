import {connect} from "react-redux";
import Chat from "./Chat";
import {getMessage} from "../../../../../Redux/Selectors";

let mapStateToProps = (state) =>{
    return {
        Message_elements: getMessage(state)
    }
}

let ChatContainer = connect(mapStateToProps,null)(Chat);


export default ChatContainer;