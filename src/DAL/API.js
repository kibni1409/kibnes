import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : '1c8106d7-cbc3-4c83-aa0f-b1611d31e00c'
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
    }
}