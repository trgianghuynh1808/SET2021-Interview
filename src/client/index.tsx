import React from "react";
import { hydrate } from "react-dom";
import App from "./app";

function WrappedApp(): JSX.Element {
  return <App />;
}

hydrate(<WrappedApp />, document.getElementById("root"));
