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
                <Body
                    dispatch={props.dispatch}
                    M_el={props.State.messages}
                    D_el={props.State.dialogs}
                    P_el={props.State.posts}
                    N_el={props.State.NewTextPost}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
