import classes from './RightBar.module.css';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Messages from "./Messages/Messages";
import Chat from "./Messages/Chat/Chat";
import AreaMessage from "./Messages/Chat/AreaMessage/AreaMessage";


const RightBar = (props) => {
    return (
        <div className={classes.rightbar_wrapper}>
            RightBar
            <Routes>

                <Route path="profile" element={<Profile
                    Addpost={props.Addpost}
                    el={props.P_el}
                    ChangeTextPost={props.ChangeTextPost}
                    N_el={props.N_el}
                />}
                />
                <Route path="messages/*" element={<Messages el={props.D_el}/>}>
                    <Route path=":id" element={<Chat el={props.M_el}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default RightBar;