import classes from './App.module.css';
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import React  from 'react';
import HeaderContainer from "./Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <HeaderContainer/>
                <Body/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
