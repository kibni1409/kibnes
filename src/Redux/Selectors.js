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
export const getCaptcha = (state) => {
    return state.Auth.CaptchaURL
}
