import React, { Component } from 'react';

import Navigation from "./Navigation";
import Clock from "./Clock";
import FooterPage from "./FooterPage";
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import ProductForm from "./ProductForm";
import Products from "./Products";
import Main from './Main';


class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Navigation> </Navigation>
                </header>
                <Main> </Main>
                <footer>
                    <FooterPage> </FooterPage>
                </footer>
            </div>
        );
    }
}

export default App;