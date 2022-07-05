import ProfileReduser from "./ProfileReduser";
import MessageReduser from "./MessageReduser";


let store = {
    _state: {
        profilepage: {
            posts: [
                {id: 0, text: 'Hello world!'},
                {id: 1, text: 'Hello milk'},
                {id: 2, text: 'Hello friends'}
            ],
            NewTextPost: 'ww'
        },
        messagepage: {
            dialogs: [
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
            ],
            newTextMessage: 'ee'
        }
    },
    Rerender(){

    },
    getState() {
        return this._state;
    },
    Subscriber(obserser){
        this.Rerender = obserser;
    },
    dispatch(action) {

        this.getState().profilepage = ProfileReduser (this.getState().profilepage, action);
        this.getState().messagepage = MessageReduser (this.getState().messagepage, action);

        this.Rerender(this.getState());

    }
}

export default store;