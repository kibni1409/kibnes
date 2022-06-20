import classes from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img src="../../../img/ava.png" alt="ava"/>
            <div className={classes.info}>
                Всем привет
            </div>
            <Posts />
        </div>
    );
}

export default Profile;