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
import {
    getFriends,
    getIsFetching,
    getPageCountFriends,
    getSizePageFriends,
    getTotalCountFriends,
    getTotalPageFriends
} from "../../../../Redux/Selectors";


let mapStateToProps = (state) => {
   return {
       friends: getFriends(state),
       totalCount: getTotalCountFriends(state),
       pageCount: getPageCountFriends(state),
       sizePage: getSizePageFriends(state),
       isFetching: getIsFetching(state),
       totalPages: getTotalPageFriends(state),
       countDoteStart: state.FriendsPage.countDoteStart, //TODO add local State
       countDoteEnd: state.FriendsPage.countDoteEnd //and this
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