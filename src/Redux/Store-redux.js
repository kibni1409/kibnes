import {combineReducers, createStore} from "redux";
import MessageReduser from "./MessageReduser";
import ProfileReduser from "./ProfileReduser";
import UsersReduser from "./UsersReduser";
import AuthReduser from "./AuthReduser";


let redusers = combineReducers({
    MessagePage: MessageReduser,
    ProfilePage: ProfileReduser,
    UsersPage: UsersReduser,
    Auth: AuthReduser
})

let store = createStore(redusers);

window.store = store;

export default store;