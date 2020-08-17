import React, {useState} from 'react';
import Login from "./login";
import Home from "./home";
import Dec from "./dec";
import Requests from './requests/Requests';
import History from './history/History';

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Index = () => {
    const [logged, setLogged] = useState(false);
    const LogIn = () =>{
        setLogged(true);
    }
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" render = {(props) => <Dec logged = {logged} {...props} />}/>
                <Route exact path="/login" render = {(props) => <Login logged = {logged} LogIn = {LogIn} {...props} />}/>
                <Route exact path="/home" render = {(props) => <Home logged = {logged} {...props}/>}/>
                <Route exact path="/requests" render={(props) => <Requests logged = {logged} {...props}/>}/>
                <Route exact path="/history" render={(props) => <History logged = {logged} {...props} />}/>
            </Switch>
        </Router>
    );
}

export default Index;