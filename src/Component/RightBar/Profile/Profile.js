import classes from './Profile.module.css';
import React from 'react';
import AreaPostContainer from "./Posts/AreaPost/AreaPostContainer";
import PostContainer from "./Posts/PostContainer";
import ava from "../../../IMG/1_1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg"
import ProfileStatus from "./ProfileStatus";
import {useParams} from "react-router-dom";
import github from "./../../../IMG/git.png"
import vk from "./../../../IMG/vk.png"
import facebook from "./../../../IMG/fe.png"
import instagram from "./../../../IMG/inst.png"
import twitter from "./../../../IMG/tw.png"
import website from "./../../../IMG/site.png"
import mainLink from "./../../../IMG/web.png"
import youtube from "./../../../IMG/you.png"

const Profile = (props) => {

    let {userID} = useParams();
    let contactElements = Object.keys(props.profile.contacts);

    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.large === null ? ava : props.profile.photos.large} alt="ava"/>
            <div className={classes.info}>
                ID={props.profile.userId} FullName={props.profile.fullName}
            </div>
            <ProfileStatus status={props.status} setStatus={props.setStatusProfileThunk} userID={userID}/>
            <div>
                <p><span>lookingForAJob {props.profile.lookingForAJob}</span></p>
                <p><span>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</span></p>
                <span>Contacts:
                    {contactElements.map(c => props.profile.contacts[c] === null
                        ? null
                        : props.profile.contacts[c] === ""
                        ? null
                        : <a href={props.profile.contacts[c]} className={classes.icon} key={c.id}>
                            {c === "github" ? <img alt={props.profile.contacts[c]} src={github} key={c.id}/> : null}
                            {c === "vk" ? <img alt={props.profile.contacts[c]} src={vk} key={c.id}/> : null}
                            {c === "facebook" ? <img alt={props.profile.contacts[c]} src={facebook} key={c.id}/> : null}
                            {c === "instagram" ? <img alt={props.profile.contacts[c]} src={instagram} key={c.id}/> : null}
                            {c === "twitter" ? <img alt={props.profile.contacts[c]} src={twitter} key={c.id}/> : null}
                            {c === "website" ? <img alt={props.profile.contacts[c]} src={website} key={c.id}/> : null}
                            {c === "mainLink" ? <img alt={props.profile.contacts[c]} src={mainLink} key={c.id}/> : null}
                            {c === "youtube" ? <img alt={props.profile.contacts[c]} src={youtube} key={c.id}/> : null}
                        </a>
                    )}
                   </span>
            </div>
            <PostContainer/>
            {userID === "my" ? <AreaPostContainer/> : null}
        </div>
    );
}

export default Profile;