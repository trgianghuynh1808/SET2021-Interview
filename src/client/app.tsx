import React from "react";
import { Routes, Route } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import routes from "./routes";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={routes.home.value} element={<HomePage />} />
      <Route path={routes.history.value} element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
