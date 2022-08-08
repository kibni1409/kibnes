import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import MessageReducer from "./MessageReducer.ts";
import ProfileReducer from "./ProfileReducer.ts";
import UsersReducer from "./UsersReducer.ts";
import AuthReducer from "./AuthReducer.ts";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    MessagePage: MessageReducer,
    ProfilePage: ProfileReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch
// @ts-ignore
window.store = store;

export default store;