import React from "react";
import utils from "../../other/utils";

const History = (props) => {
  utils.checkLog(props);
  return(
    <React.Fragment>
      <div>
        Hello from History
      </div>
    </React.Fragment>
  )
}

export default History;