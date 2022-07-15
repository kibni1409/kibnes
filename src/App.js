import classes from './App.module.css';
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import React  from 'react';

const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
