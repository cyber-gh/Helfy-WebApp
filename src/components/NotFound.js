import React from "react";
import {Link} from "react-router-dom";

export default (props) => {
    return(
        <>
            <h2>Link not found</h2>
            <Link to= {props.logged ? "/home" : "/login"}>{props.logged ? "Go to home" : "Go to login"}</Link>
        </>
    )
}