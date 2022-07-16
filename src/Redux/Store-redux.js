import {combineReducers, createStore} from "redux";
import MessageReduser from "./MessageReduser";
import ProfileReduser from "./ProfileReduser";
import UsersReduser from "./UsersReduser";
import AuthReduser from "./AuthReduser";
import FriendsReduser from "./FriendsReduser";


let redusers = combineReducers({
    MessagePage: MessageReduser,
    ProfilePage: ProfileReduser,
    UsersPage: UsersReduser,
    Auth: AuthReduser,
    FriendsPage: FriendsReduser
})

let store = createStore(redusers);

window.store = store;

export default store;