import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import "../locales/config";
import PageNotFound from "./errors/PageNotFound";

function Views(): React.ReactElement {
  const homePage = useLocation().pathname === "/";
  return (
    <div style={homePage ? {} : { paddingTop: 90 }}>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Routes>
    </div>
  );
}

export default Views;
