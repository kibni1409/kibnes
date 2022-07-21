import {connect} from "react-redux";
import {
    setCountDoteEnd,
    setCountDoteStart,
    setPageCount,
    setTotalPages,
    setFriendsThunk,
    FollowFriendThunk,
    unFollowFriendThunk
} from "../../../../Redux/FriendsReducer";
import FriendsAPI from "./FriendsAPI";


let mapStateToProps = (state) => {
   return {
       friends: state.FriendsPage.friends,
       totalCount: state.FriendsPage.totalCount,
       pageCount: state.FriendsPage.pageCount,
       sizePage: state.FriendsPage.sizePage,
       isFetching: state.FriendsPage.isFetching,
       totalPages: state.FriendsPage.totalPages,
       countDoteStart: state.FriendsPage.countDoteStart,
       countDoteEnd: state.FriendsPage.countDoteEnd
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        FollowFriendThunk: (id) => {
            dispatch(FollowFriendThunk(id));
        },
        unFollowFriendThunk: (id) => {
            dispatch(unFollowFriendThunk(id));
        },
        setPageCount: (count) => {
            let action = setPageCount(count);
            dispatch(action);
        },
        setTotalPages: (count) =>{
            let action = setTotalPages(count);
            dispatch(action);
        },
        setcountDoteStart: (dote) => {
            let action = setCountDoteStart(dote);
            dispatch(action);
        },
        setcountDoteEnd: (dote) => {
            let action = setCountDoteEnd(dote);
            dispatch(action);
        },
        setFriendsThunk: (pageCount, sizePage) =>{
            dispatch(setFriendsThunk(pageCount, sizePage))
        }
    }
}

let FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(FriendsAPI);

export default FriendsContainer;