import classes from './App.module.css';
import Footer from "./Component/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import HeaderContainer from "./Component/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {AuthMeThunk} from "./Redux/AuthReducer";
import LeftBar from "./Component/LeftBar/LeftBar";
import RightBar from "./Component/RightBar/RightBar";
class App extends React.Component {

    componentDidMount() {
        this.props.AuthMeThunk()
    }

    render() {
        return (
            <BrowserRouter>
                <div className={classes.app_wrapper}>
                    <HeaderContainer/>
                    <LeftBar/>
                    <RightBar/>
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
