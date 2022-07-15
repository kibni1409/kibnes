import {combineReducers, createStore} from "redux";
import MessageReduser from "./MessageReduser";
import ProfileReduser from "./ProfileReduser";
import UsersReduser from "./UsersReduser";


let redusers = combineReducers({
    MessagePage: MessageReduser,
    ProfilePage: ProfileReduser,
    UsersPage: UsersReduser
})

let store = createStore(redusers);

window.store = store;

export default store;