import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: "50px",
        height: "50px",
        margin: "auto",
        disaplay: "block"
      }}
      alt="loading..."
    />
    <h5>If this appears for more than 2 seconds, please refresh</h5>
  </Fragment>
);
