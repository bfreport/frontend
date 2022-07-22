import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "../locales/config";
import PageNotFound from "./errors/PageNotFound";

function Views(): React.ReactElement {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Views;
