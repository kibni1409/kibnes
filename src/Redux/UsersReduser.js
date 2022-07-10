let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        {id: 0, name: "Dima", secondName: "Petrov", location: "St-Peterburg", follow: true, ava: "https://img2.goodfon.ru/wallpaper/nbig/e/ee/gunter-adventure-time-at.jpg"},
        {id: 1, name: "Sveta", secondName: "Shilova", location: "Kiev", follow: true, ava: "https://img2.goodfon.ru/wallpaper/nbig/e/ee/gunter-adventure-time-at.jpg"},
        {id: 2, name: "Olia", secondName: "Ivanova", location: "Moscow", follow: true, ava: "https://img2.goodfon.ru/wallpaper/nbig/e/ee/gunter-adventure-time-at.jpg"},
        {id: 3, name: "Andrey", secondName: "Sidorov", location: "Vladivostok", follow: true, ava: "https://img2.goodfon.ru/wallpaper/nbig/e/ee/gunter-adventure-time-at.jpg"},
        {id: 4, name: "Roma", secondName: "Julin", location: "Novgorod", follow: true, ava: "https://img2.goodfon.ru/wallpaper/nbig/e/ee/gunter-adventure-time-at.jpg"},
        {id: 5, name: "Vlad", secondName: "Manin", location: "Permi", follow: true, ava: "https://img2.goodfon.ru/wallpaper/nbig/e/ee/gunter-adventure-time-at.jpg"},
        {id: 6, name: "Nina", secondName: "Drozdova", location: "Viborg", follow: true, ava: "https://img2.goodfon.ru/wallpaper/nbig/e/ee/gunter-adventure-time-at.jpg"},
    ],
    newTextUsers: 'ee'
}

let UsersReduser = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW: {

            return {
                ...state,
                ...state.users,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, follow: true};
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {

            return {
                ...state,
                ...state.users,
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, follow: false};
                    }
                    return u;
                })
            }
        }
        default:
            return state;
    }
}

export const FollowAC = (id) =>{
    return {
        type: "FOLLOW",
        userID: id
    }
}
export const UnfollowAC = (id) => {
    return {
        type: "UNFOLLOW",
        userID: id
    }
}

export default UsersReduser;