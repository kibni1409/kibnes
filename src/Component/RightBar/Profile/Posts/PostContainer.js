import {connect} from "react-redux";
import Posts from "./Posts";
import {getPosts} from "../../../../Redux/Selectors";


let mapStateToProps = (state) =>{
    return {
        Posts: getPosts(state)
    }
}

let PostContainer = connect(mapStateToProps,null)(Posts);

export default PostContainer;