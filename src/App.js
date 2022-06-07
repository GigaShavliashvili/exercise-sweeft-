import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Detail } from "./Page";
import { ROUTES } from "./Config/Router";
const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path={ROUTES.HOME} exact element={<Home />} />
          <Route path={ROUTES.USER} element={<Detail />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
