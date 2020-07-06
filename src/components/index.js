import React, {useState} from 'react';
import Login from "./login";
import Home from "./home";

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

const Index = () =>{
    const [logged, setLogged] = useState(false);
    const LogIn = () =>{
        setLogged(true);
    }
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {logged ? <Redirect to = "/home"/> : <Redirect to = "/login"/>}
                </Route>
                <Route exact path="/login">
                    <Login logged = {logged} LogIn = {LogIn}/>
                </Route>
                <Route exact path="/home">
                    <Home logged = {logged} />
                </Route>
            </Switch>
        </Router>
    );
}

export default Index;