import classes from './App.module.css';
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer";
import LeftBar from "./Body/LeftBar/LeftBar";
import RightBar from "./Body/RightBar/RightBar";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Profile from "./Body/RightBar/Profile/Profile";
import Messages from "./Body/RightBar/Messages/Messages";

const App = () => {
    return (
        <BrowserRouter>

            <div className={classes.app_wrapper}>
                <Header/>
                <Body />
                <Footer/>
            </div>

        </BrowserRouter>
    );
}

export default App;
