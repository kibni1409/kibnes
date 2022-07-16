import * as axios from "axios";


export const Follow = (userID) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {},{
        withCredentials: true,
        headers: {
            "API-KEY" : '1c8106d7-cbc3-4c83-aa0f-b1611d31e00c'
        }
    }).then(response => response.data)
}

export const UnFollow = (userID) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`,{
        withCredentials: true,
        headers: {
            "API-KEY" : '1c8106d7-cbc3-4c83-aa0f-b1611d31e00c'
        }
    }).then(response => response.data)
}

export const GetFollow = (userID) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`,{
        withCredentials: true,
        headers: {
            "API-KEY" : '1c8106d7-cbc3-4c83-aa0f-b1611d31e00c'
        }
    }).then(response => response.data)
}

export const GetUsers = (pageCount, sizePage) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageCount}&count=${sizePage}`,{
        withCredentials: true,
        headers: {
            "API-KEY" : '1c8106d7-cbc3-4c83-aa0f-b1611d31e00c'
        }
    }).then(response => response.data)
}
export const GetFriends = (pageCount, sizePage) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageCount}&count=${sizePage}&friend=true`,{
        withCredentials: true,
        headers: {
            "API-KEY" : '1c8106d7-cbc3-4c83-aa0f-b1611d31e00c'
        }
    }).then(response => response.data)
}