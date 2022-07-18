import {connect} from "react-redux";
import {
    setCountDoteEnd,
    setCountDoteStart,
    setPageCount,
    setTotalPages,
    setUsersThunk,
    unFollowUserThunk,
    FollowUserThunk,
} from "../../../Redux/UsersReducer";
import UsersAPI from "./UsersAPI";

let mapStateToProps = (state) => {
   return {
       users: state.UsersPage.users,
       totalCount: state.UsersPage.totalCount,
       pageCount: state.UsersPage.pageCount,
       sizePage: state.UsersPage.sizePage,
       isFetching: state.UsersPage.isFetching,
       totalPages: state.UsersPage.totalPages,
       countDoteStart: state.UsersPage.countDoteStart,
       countDoteEnd: state.UsersPage.countDoteEnd,
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
        FollowUserThunk: (user) => {
          dispatch(FollowUserThunk(user));
        },
        unFollowUserThunk: (user) => {
          dispatch(unFollowUserThunk(user));
        }
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPI);

export default UsersContainer;