import UsersReducer, {FollowUsers, UnFollowUsers, UserType} from "./UsersReducer";


let state = {
    users: [
        {
            name: "Ivan",
            id: 0,
            photos: {
                small: null,
                large: null
            },
            status: "string",
            followed: true
        },
        {
            name: "Rebert",
            id: 1,
            photos: {
                small: null,
                large: null
            },
            status: "string",
            followed: false
        }
    ],
    totalCount: 2,
    pageCount: 1,
    sizePage: 10,
    isFetching: false,
    totalPages: 1,
    countDoteStart: false,
    countDoteEnd: false
}

it("Un/Follow user", () => {
    let action = FollowUsers(1)
    let NewState = UsersReducer(state, action)

    action = UnFollowUsers(0)
    NewState = UsersReducer(NewState, action)

    expect(NewState.users[1].followed).toBe(true)
    expect(NewState.users[0].followed).toBe(false)
})