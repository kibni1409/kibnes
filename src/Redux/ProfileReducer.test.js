import profileReducer, {AddPostAction, DeletePost} from "./ProfileReducer";

let state = {
    posts: [
        {id: 0, text: 'Hello world!'},
        {id: 1, text: 'Hello milk'},
        {id: 2, text: 'Hello friends'}
    ],
    profile: null,
    status: null,
    isFetching: false
}

it("Add post", () => {
    let action = AddPostAction("Hello")

    let NewState = profileReducer(state, action)

    expect(NewState.posts.length).toBe(4)
})
it("Message new post", () => {
    let action = AddPostAction("Hello")

    let NewState = profileReducer(state, action)

    expect(NewState.posts[3].text).toBe("Hello")
})
it("Delete post", () => {
    let action = DeletePost(2)

    let NewState = profileReducer(state, action)

    expect(NewState.posts.length).toBe(2)
})
it("Delete fake post", () => {
    let action = DeletePost(100500)

    let NewState = profileReducer(state, action)

    expect(NewState.posts.length).toBe(3)
})