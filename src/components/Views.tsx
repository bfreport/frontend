import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import "../locales/config";
import PageNotFound from "./errors/PageNotFound";

function Views(): React.ReactElement {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default Views;
