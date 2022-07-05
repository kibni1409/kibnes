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
                    M_el={props.State.messagepage.messages}
                    D_el={props.State.messagepage.dialogs}
                    P_el={props.State.profilepage.posts}
                    N_el={props.State.profilepage.NewTextPost}
                    n_el={props.State.messagepage.newTextMessage}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
