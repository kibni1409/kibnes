import classes from './Profile.module.css';
import React  from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <img src="https://avatars.yandex.net/get-music-user-playlist/59900/566735970.1000.49057/m1000x1000?1567501161045&webp=false" alt="ava"/>
            <div className={classes.info}>
                Всем привет
            </div>
            <PostContainer />
            <AreaPostContainer/>
        </div>
    );
}

export default Profile;