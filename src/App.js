import classes from './App.module.css';
import Header from "./Header/Header.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className={classes.app_wrapper}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
