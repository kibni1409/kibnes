import classes from './RightBar.module.css';
import Profile from "./Profile/Profile";

function RightBar() {
    return (
        <div className={classes.rightbar_wrapper}>
            <Profile />
        </div>
    );
}

export default RightBar;