import * as React from "react";
import { hot } from "react-hot-loader";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Footer from "./main/Footer";
import Navbar from "./main/Navbar";
import Views from "./Views";

import "./../assets/scss/App.scss";

const queryClient = new QueryClient();

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Views />
          <Footer />
        </QueryClientProvider>
      </BrowserRouter>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
