import classes from './App.module.css';
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import React  from 'react';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Body
                    dispatch={props.dispatch}
                    M_el={props.State.MessagePage.messages}
                    D_el={props.State.MessagePage.dialogs}
                    P_el={props.State.ProfilePage.posts}
                    N_el={props.State.ProfilePage.NewTextPost}
                    n_el={props.State.MessagePage.newTextMessage}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
