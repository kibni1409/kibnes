import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : '108232a7-6f25-4a6c-b01e-64547b3305e7'
    }
});


export const usersAPI = {
    Follow (userID) {
        return instance.post('follow/' + userID).then(
            resronse => resronse.data
        )
    },
    UnFollow (userID) {
        return instance.delete('follow/' + userID).then(
            resronse => resronse.data
        )
    },
    GetFollow (userID) {
        return instance.get('follow/' + userID).then(
            resronse => resronse.data
        )
    },
    GetUsers (pageCount, sizePage) {
        return instance.get(`users?page=${pageCount}&count=${sizePage}`).then(
            resronse => resronse.data
        )
    },
    GetFriends (pageCount, sizePage) {
        return instance.get(`users?page=${pageCount}&count=${sizePage}&friend=true`).then(
            resronse => resronse.data
        )
    },
}

export const profileAPI = {
    AuthMe () {
        return instance.get(`auth/me`).then(
            resronse => resronse.data
        )
    },
    Login (email, password, rememberMe, captcha= null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(
            resronse => resronse.data
        )
    },
    Logout () {
        return instance.delete(`auth/login`).then(
            resronse => resronse.data
        )
    },
    InfoProfile(userID){
        return instance.get(`profile/${userID}`).then(
            resronse => resronse.data
        )
    },
    getStatusProfile(userID){
        return instance.get(`profile/status/${userID}`)
    },
    setStatusProfile(status){
        return instance.put(`profile/status`,{
            status: status
        })
    },
    getCaptchaURL(){
        return instance.put(`/security/get-captcha-url`,{
        })
    },
    setPhotoProfile(){
        let formdata = new FormData();
        let imagefile = document.querySelector('#photo')
        formdata.append("image", imagefile.files[0])

        return instance.put(`profile/photo`,formdata,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    setContacts(data){
        return instance.put(`profile`,{
            aboutMe: data.aboutMe,
            contacts: data,
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            fullName: data.fullName

        })
    }
}