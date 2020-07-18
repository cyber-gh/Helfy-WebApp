import React from 'react';
import {Redirect} from "react-router-dom";

export default (props) => {
    return(
        (props.logged) ? <Redirect to = "/home"/> : <Redirect to = "/login"/>
    )
}