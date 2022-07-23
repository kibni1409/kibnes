import {connect} from "react-redux";
import Posts from "./Posts";
import {getPosts} from "../../../../../Redux/Selectors";


let mapStateToProps = (state) =>{
    return {
        Posts: getPosts(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


let PostContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostContainer;