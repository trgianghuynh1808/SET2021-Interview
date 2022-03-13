import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { rootStore } from "./stores";

import App from "./app";
import "./scss/global.scss";

function WrappedApp(): JSX.Element {
  return (
    <Provider {...rootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

hydrate(<WrappedApp />, document.getElementById("root"));
