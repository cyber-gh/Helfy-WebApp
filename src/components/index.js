import React, {useState} from 'react';
import Login from "./login";
import Home from "./home";
import Requests from './requests/Requests';
import History from './history/History';
import NotFound from "./NotFound";

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import AppBar from "./AppBar";


const ProtectedRoute = ({ isAllowed, redirect,  ...props }) => {
    return isAllowed ? <Route {...props}/> : <Redirect to={redirect}/>
}


const Index = () => {
    const [logged, setLogged] = useState(false);
    const LogIn = () =>{
        setLogged(true);
    }
    return (
        <Router>
            {logged ? <AppBar /> : null}
            <Switch>
                <Route exact path="/login" render = {(props) => <Login logged = {logged} LogIn = {LogIn}  {...props} />} />
                <Route exact path="/error" render = {(props) => <NotFound logged = {logged} {...props} />} />
                <ProtectedRoute isAllowed={logged} redirect = "/login" exact path="/home" render = {(props) => <Home logged = {logged} {...props}/>} />
                {/*<ProtectedRoute isAllowed={logged} redirect = "/login" exact path="/requests" render={(props) => <Requests logged = {logged} {...props}/>} />*/}
                {/*<ProtectedRoute isAllowed={logged} redirect = "/login" exact path="/history" render={(props) => <History logged = {logged} {...props} />} />*/}
                <Redirect exact from = "/" to = {logged ? "/home" : "login"}/>
                <Redirect from = "*" to = "/error"/>
            </Switch>
        </Router>
    );
}

export default Index;