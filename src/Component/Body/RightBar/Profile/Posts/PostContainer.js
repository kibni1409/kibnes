import {connect} from "react-redux";
import Posts from "./Posts";


let mapStateToProps = (state) =>{
    return {
        Posts: state.ProfilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}


let PostContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostContainer;