import MessageReducer, {AddMessageAction} from "./MessageReducer";

let state = {
    dialogs:  [
        {id: 0, name: "Dima"},
        {id: 1, name: "Sveta"},
        {id: 2, name: "Andrey"}
    ],
    messages: [
        {id: 0, message: 'Hi', idDialog: 2},
        {id: 1, message: 'Yo', idDialog: 2},
        {id: 2, message: 'Normal', idDialog: 1},
        {id: 3, message: 'Ok', idDialog: 1},
        {id: 4, message: 'Yes, i to', idDialog: 0},
        {id: 5, message: 'I am OK', idDialog: 0}
    ]
}

it("Add message", () => {
    let action = AddMessageAction("Hello")

    let NewState = MessageReducer(state, action)
    expect(NewState.messages.length).toBe(7)
})
it("Current message", () => {
    let action = AddMessageAction("Hello")

    let NewState = MessageReducer(state, action)
    expect(NewState.messages[6].message).toBe("Hello")
})
