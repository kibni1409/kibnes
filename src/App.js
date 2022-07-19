import classes from './App.module.css';
import Body from "./Component/Body/Body.js";
import Footer from "./Component/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import React  from 'react';
import HeaderContainer from "./Component/Header/HeaderContainer";

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
