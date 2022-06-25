import classes from './App.module.css';
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Body M_el={props.Appstate.messages} D_el={props.Appstate.dialogs} />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
