import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Products from "./Products";
import ProductForm from "./ProductForm";
import Songs from "./Songs";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path='/' component={Products}/>/>
            <Route path='/songs' component={Songs}/>
        </Switch>
    </main>
);

export default Main
