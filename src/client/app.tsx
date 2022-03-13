import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import routes from "./routes";
import { rootStore } from "./stores";

function App(): JSX.Element {
  return (
    <Provider {...rootStore}>
      <Routes>
        <Route path={routes.home.value} element={<HomePage />} />
        <Route path={routes.history.value} element={<HistoryPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
