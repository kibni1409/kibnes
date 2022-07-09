import React from 'react';
import './index.module.css';
import store from "./Redux/Store-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";


// let Rerender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
// }

// Rerender(store.getState());
//
// store.subscribe( () => {
//     let state = store.getState();
//     Rerender(state);
// });

