import classes from './Body.module.css';
import LeftBar from "./LeftBar/LeftBar";
import {
    Routes,
    Route
} from "react-router-dom";
import Profile from "./RightBar/Profile/Profile";
import Messages from "./RightBar/Messages/Messages";
import Chat from "./RightBar/Messages/Chat/Chat";

const Body = () => {
    return (
        <div className={classes.body_wrapper}>
            <LeftBar />
            <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="messages/*" element={<Messages/>}>
                    <Route path=":id" element={<Chat />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default Body;