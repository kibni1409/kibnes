import {connect} from "react-redux";
import {
    setCountDoteEnd,
    setCountDoteStart,
    setPageCount,
    setTotalPages,
    setUsersThunk,
    unFollowUserThunk,
    FollowUserThunk,
    setFriendsThunk
} from "../../../Redux/UsersReducer";
import UsersAPI from "./UsersAPI";
import {compose} from "redux";
import {
    getIsAuth, getIsFetching,
    getPageCountUsers,
    getSizePageUsers,
    getTotalCountUsers, getTotalPages,
    getUsers
} from "../../../Redux/Selectors";

let mapStateToProps = (state) => {


   return {
       users: getUsers(state),
       totalCount: getTotalCountUsers(state),
       pageCount: getPageCountUsers(state),
       sizePage: getSizePageUsers(state),
       isFetching: getIsFetching(state),
       totalPages: getTotalPages(state),
       countDoteStart: state.UsersPage.countDoteStart, // TODO local state
       countDoteEnd: state.UsersPage.countDoteEnd, // and this
       isAuth: getIsAuth(state),
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPageCount: (count) => {
            let action = setPageCount(count);
            dispatch(action);
        },
        settotalPages: (count) =>{
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
        setUsersThunk: (pageCount, sizePage) => {
            dispatch(setUsersThunk(pageCount, sizePage))
        },
        setFriendsThunk: (pageCount, sizePage) => {
            dispatch(setFriendsThunk(pageCount, sizePage))
        },
        FollowUserThunk: (user) => {
          dispatch(FollowUserThunk(user));
        },
        unFollowUserThunk: (user) => {
          dispatch(unFollowUserThunk(user));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(UsersAPI)

