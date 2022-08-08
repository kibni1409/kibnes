import AuthReducer, {ErrorAC, SetCaptchaURLAC, SetUserDataAC} from "./AuthReducer";



let state = {
    login: null,
    userID: null,
    email: null,
    isAuth: false,
    Error: null,
    CaptchaURL: null
}

it("Set users", () => {
    let action = SetUserDataAC(12, "kibni1409", "kibni1409@gmail.com", true )

    let NewState = AuthReducer(state, action)

    expect(NewState.userID).toBe(12)
    expect(NewState.login).toBe("kibni1409")
    expect(NewState.email).toBe("kibni1409@gmail.com")
    expect(NewState.isAuth).toBe(true)
})
it("Set error", () => {
    let action = ErrorAC("Error")

    let NewState = AuthReducer(state, action)

    expect(NewState.Error).toBe("Error")
})
it("Set captcha", () => {
    let action = SetCaptchaURLAC("Captcha")

    let NewState = AuthReducer(state, action)

    expect(NewState.CaptchaURL).toBe("Captcha")
})