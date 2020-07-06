import React from "react";
import {Redirect} from "react-router-dom";

export default (props) => {
    if (!props.logged){
        return(
            <Redirect to = "/login"/>
        )
    }
    return(
        <h2>test</h2>
    )
}