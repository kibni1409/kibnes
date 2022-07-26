import classes from './App.module.css';
import Body from "./Component/Body/Body.js";
import Footer from "./Component/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import HeaderContainer from "./Component/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {AuthMeThunk} from "./Redux/AuthReducer";

class App extends React.Component {

    componentDidMount() {
        this.props.AuthMeThunk()
    }

    render() {
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
}

let mapDispatchToProps = (dispatch) => {
    return {
        AuthMeThunk: () => {
            dispatch(AuthMeThunk())
        },
    }
}

export default compose(
    connect(null,mapDispatchToProps),
)(App);
