import {connect} from "react-redux";
import Chat from "./Chat";

let mapStateToProps = (state) =>{
    return {
        Message_elements: state.MessagePage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

let ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat);


export default ChatContainer;