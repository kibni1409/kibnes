let store = {
    _state: {
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
        posts: [
            {id: 0, texts: 'Hello world!'},
            {id: 1, texts: 'Hello milk'},
            {id: 2, texts: 'Hello friends'}
        ],
        NewTextPost: "Rrr"
    },
    Rerender(){

    },
    getState() {
        return this._state;
    },
    AddPost() {
        
        let size = this.getState().posts.length;
        let post = {
            id: size,
            texts: this.getState().NewTextPost
        }
        this.getState().posts.push(post);
        this.getState().NewTextPost = "";
        this.Rerender(this.getState());
    },
    ChangeTextPost(text){
        this.getState().NewTextPost = text;
        this.Rerender(this.getState());
    },
    Subscriber(obserser){
        this.Rerender = obserser;
    }

}

export default store;