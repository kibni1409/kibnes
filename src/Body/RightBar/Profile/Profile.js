import classes from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={classes.profile}>
            Profile
            <img src="https://avatars.yandex.net/get-music-user-playlist/59900/566735970.1000.49057/m1000x1000?1567501161045&webp=false" alt="ava"/>
            <div className={classes.info}>
                Всем привет
            </div>
            <Posts />
        </div>
    );
}

export default Profile;