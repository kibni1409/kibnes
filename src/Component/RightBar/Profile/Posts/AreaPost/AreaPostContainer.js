import {AddPostAction} from "../../../../../Redux/ProfileReducer";
import AreaPost from "./AreaPost";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (text) => {
            let action = AddPostAction(text);
            dispatch(action);
        }
    }
}


let AreaMessageContainer = connect(mapStateToProps,mapDispatchToProps)(AreaPost);

export default AreaMessageContainer;
