import classes from './Profile.module.css';
import Posts from "./Posts/Posts";
import AreaPost from "./Posts/AreaPost/AreaPost";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <img src="https://avatars.yandex.net/get-music-user-playlist/59900/566735970.1000.49057/m1000x1000?1567501161045&webp=false" alt="ava"/>
            <div className={classes.info}>
                Всем привет
            </div>
            <Posts el={props.el}  />
            <AreaPost
                dispatch={props.dispatch}
                N_el={props.N_el}
            />
        </div>
    );
}

export default Profile;