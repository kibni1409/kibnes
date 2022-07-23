export const getIsAuth = (state) => {
    return state.Auth.isAuth
}
export const getError = (state) => {
    return state.Auth.Error
}
export const getProfile = (state) => {
    return state.ProfilePage.profile
}
export const getUserId = (state) => {
    return state.Auth.userID
}
export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}
export const getStatus = (state) => {
    return state.ProfilePage.status
}
export const getFriends = (state) => {
    return state.FriendsPage.friends
}
export const getTotalCountFriends = (state) => {
    return state.FriendsPage.totalCount
}
export const getPageCountFriends = (state) => {
    return state.FriendsPage.pageCount
}
export const getSizePageFriends = (state) => {
    return state.FriendsPage.sizePage
}
export const getTotalPageFriends = (state) => {
    return state.FriendsPage.totalPages
}
export const getDialogs = (state) => {
    return state.MessagePage.dialogs
}
export const getMessage = (state) => {
    return state.MessagePage.messages
}
export const getPosts = (state) => {
    return state.ProfilePage.posts
}
export const getUsers = (state) => {
    return state.UsersPage.users
}
export const getTotalCountUsers = (state) => {
    return state.UsersPage.totalCount
}
export const getPageCountUsers = (state) => {
    return state.UsersPage.pageCount
}
export const getSizePageUsers = (state) => {
    return state.UsersPage.sizePage
}
export const getTotalPages = (state) => {
    return state.UsersPage.totalPages
}
