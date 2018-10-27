import React, { Component, Fragment } from 'react';
import Header from "../components/shared/Header";
import Body from "../components/shared/Body";
import Footer from "../components/shared/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./LoginContainer";

class BaseContainer extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Body>
                    <Router>
                        <Route exact path="/" component={LoginContainer} />
                    </Router>
                </Body>
                <Footer/>
            </Fragment>
        );
    }
}

export default BaseContainer;
