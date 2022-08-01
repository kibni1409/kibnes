import github from "./../../../IMG/git.png"
import vk from "./../../../IMG/vk.png"
import facebook from "./../../../IMG/fe.png"
import instagram from "./../../../IMG/inst.png"
import twitter from "./../../../IMG/tw.png"
import website from "./../../../IMG/site.png"
import mainLink from "./../../../IMG/web.png"
import youtube from "./../../../IMG/you.png"
import classes from "./Profile.module.css";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

//TODO refactoring

const Contacts = (props) => {

    let [githubC,editGitHub] = useState(props.profile.contacts.github)
    let [vkC,editVk] = useState(props.profile.contacts.vk)
    let [facebookC,editFacebook] = useState(props.profile.contacts.facebook)
    let [instagramC,editInstagram] = useState(props.profile.contacts.instagram)
    let [twitterC,editTwitter] = useState(props.profile.contacts.twitter)
    let [websiteC,editWebsite] = useState(props.profile.contacts.website)
    let [youtubeC,editYoutube] = useState(props.profile.contacts.youtube)
    let [mainLinkC,editMainLink] = useState(props.profile.contacts.mainLink)
    let [fullNameC,editFullName] = useState(props.profile.fullName)
    let [aboutMeC,editAboutMe] = useState(props.profile.aboutMe)
    let [descriptionC,editDescription] = useState(props.profile.lookingForAJobDescription)
    let [editMode, setEditMode] = useState(false);

    useEffect(()=>{
        editGitHub(props.profile.contacts.github);
        editVk(props.profile.contacts.vk);
        editFacebook(props.profile.contacts.facebook);
        editInstagram(props.profile.contacts.instagram);
        editTwitter(props.profile.contacts.twitter);
        editWebsite(props.profile.contacts.website);
        editYoutube(props.profile.contacts.youtube);
        editMainLink(props.profile.contacts.mainLink);
        editDescription(props.profile.lookingForAJobDescription);
    },[props.profile.contacts])

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const ContactsLink = (props) => {

        let contactElements = Object.keys(props.profile.contacts);

        return (
            <span>Contacts:
                {contactElements.map(c => props.profile.contacts[c] === null
                    ? null
                    : props.profile.contacts[c] === ""
                        ? null
                        : <a href={props.profile.contacts[c]} className={classes.icon} key={c.id}>
                            {c === "github"
                                ? <img alt={props.profile.contacts[c]} src={github} key={c.id}/>
                                : null}
                            {c === "vk"
                                ? <img alt={props.profile.contacts[c]} src={vk} key={c.id}/>
                                : null}
                            {c === "facebook"
                                ? <img alt={props.profile.contacts[c]} src={facebook} key={c.id}/>
                                : null}
                            {c === "instagram"
                                ? <img alt={props.profile.contacts[c]} src={instagram} key={c.id}/>
                                : null}
                            {c === "twitter"
                                ? <img alt={props.profile.contacts[c]} src={twitter} key={c.id}/>
                                : null}
                            {c === "website"
                                ? <img alt={props.profile.contacts[c]} src={website} key={c.id}/>
                                : null}
                            {c === "youtube"
                                ? <img alt={props.profile.contacts[c]} src={youtube} key={c.id}/>
                                : null}
                            {c === "mainLink"
                                ? <img alt={props.profile.contacts[c]} src={mainLink} key={c.id}/>
                                : null}
                        </a>
                )}
                </span>
        )
    }

    const Activate  = () => {
        setEditMode(true);
    }

    const Diactivate = () => {
        setEditMode(false);
    }

    const onSubmit = (data) => {
        Diactivate();
        props.setContactsThunk(data, props.profile.userId)
        console.log(data);
        reset();
    }

    const onFacebookChange = (e) => {
        editFacebook(e.currentTarget.value)
    }
    const onGitHubChange = (e) => {
        editGitHub(e.currentTarget.value)
    }
    const onInstagramChange = (e) => {
        editInstagram(e.currentTarget.value)
    }
    const onMainLinkChange = (e) => {
        editMainLink(e.currentTarget.value)
    }
    const onTwitterChange = (e) => {
        editTwitter(e.currentTarget.value)
    }
    const onVkChange = (e) => {
        editVk(e.currentTarget.value)
    }
    const onWebSiteChange = (e) => {
        editWebsite(e.currentTarget.value)
    }
    const onYoutubeChange = (e) => {
        editYoutube(e.currentTarget.value)
    }
    const onDescription = (e) => {
        editDescription(e.currentTarget.value)
    }
    const onName = (e) => {
        editFullName(e.currentTarget.value)
    }
    const onAboutMe = (e) => {
        editAboutMe(e.currentTarget.value)
    }

    return (
        <div>
            {props.userID === "my"
                ? editMode
                    ? <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="fullName">FullName:</label>
                        <input {...register("fullName")} onChange={onName} placeholder={props.profile.fullName || "FullName"} value={fullNameC} ></input><br/>

                        <label htmlFor="aboutMe">About me:</label>
                        <textarea {...register("aboutMe")} onChange={onAboutMe} placeholder={props.profile.aboutMe || "About Me"} value={aboutMeC} ></textarea><br/>

                        <label htmlFor="Looking">Looking for a job:</label>
                        <input {...register("lookingForAJob")} type="checkbox"/><br/>

                        <label htmlFor="Description">Looking for a job description:</label>
                        <input {...register("lookingForAJobDescription")} placeholder={props.profile.lookingForAJobDescription} onChange={onDescription} value={descriptionC} ></input><br/>

                        <input {...register("facebook")} onChange={onFacebookChange} placeholder={facebookC || "Facebook"} value={facebookC}></input><br/>
                        <input {...register("github")} onChange={onGitHubChange} placeholder={githubC || "GitHub"} value={githubC}></input><br/>
                        <input {...register("instagram")} onChange={onInstagramChange} placeholder={instagramC || "Instagram"} value={instagramC}></input><br/>
                        <input {...register("mainlink")} onChange={onMainLinkChange} placeholder={mainLinkC || "MainLink"} value={mainLinkC}></input><br/>
                        <input {...register("twitter")} onChange={onTwitterChange} placeholder={twitterC || "Twitter"} value={twitterC}></input><br/>
                        <input {...register("vk")} onChange={onVkChange} placeholder={vkC || "VK.ru"} value={vkC}></input><br/>
                        <input {...register("website")} onChange={onWebSiteChange} placeholder={websiteC || "Website"} value={websiteC}></input><br/>
                        <input {...register("youtube")} onChange={onYoutubeChange} placeholder={youtubeC || "YouTube"} value={youtubeC}></input><br/>
                        <button type={"submit"}>Save</button><br/>
                      </form>
                    : <div>
                        <div className={classes.info}>
                            ID: {props.profile.userId} FullName: {props.profile.fullName}
                        </div>
                        About me: {props.profile.aboutMe}
                        <p><span>Looking for a job: {props.profile.lookingForAJob ? "True" : "False"}</span></p>
                        <p><span>Looking for a job description: {props.profile.lookingForAJobDescription}</span></p>
                        <ContactsLink profile={props.profile} />
                        <button onClick={Activate} type={"button"}>Edit</button>
                      </div>
                : <div>

                    <div className={classes.info}>
                        ID: {props.profile.userId} FullName: {props.profile.fullName}
                    </div>
                    <p><span>Looking for a job: {props.profile.lookingForAJob ? "True" : "False"}</span></p>
                    <p><span>Looking for a job description: {props.profile.lookingForAJobDescription}</span></p>
                    About me: {props.profile.aboutMe}
                    <ContactsLink profile={props.profile}/>
                </div>

            }
        </div>
    )

}

export default Contacts;