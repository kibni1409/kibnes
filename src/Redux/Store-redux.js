import {applyMiddleware, combineReducers, createStore} from "redux";
import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    MessagePage: MessageReducer,
    ProfilePage: ProfileReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;