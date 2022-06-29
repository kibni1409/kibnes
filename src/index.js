import React from 'react';
import './index.module.css';
import store from "./Redux/State";
import ReactDOM from "react-dom/client";
import App from "./App";

let Rerender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App
                State={store.getState()}
                Appstate={store.getState.bind(store)}
                AddPost={store.AddPost.bind(store)}
                ChangeTextPost={store.ChangeTextPost.bind(store)}
            />
        </React.StrictMode>
    );
}

Rerender(store.getState());

store.Subscriber(Rerender);

