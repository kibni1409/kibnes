import React from 'react';
import './index.module.css';
import store from "./Redux/Store-redux.ts";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
    </React.StrictMode>
);

