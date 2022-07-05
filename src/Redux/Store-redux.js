import {combineReducers, createStore} from "redux";
import MessageReduser from "./MessageReduser";
import ProfileReduser from "./ProfileReduser";


let redusers = combineReducers({
    MessagePage: MessageReduser,
    ProfilePage: ProfileReduser
})

let store = createStore(redusers);

export default store;