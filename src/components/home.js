import React from "react";
import utils from "../other/utils";
import Schedule from "./schedule/Schedule"

export default (props) => {
    utils.checkLog(props);
    return(
        <Schedule />
    )
}