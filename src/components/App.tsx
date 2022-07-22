import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Footer from "./main/Footer";
import Navbar from "./main/Navbar";
import Views from "./Views";

import "./../assets/scss/App.scss";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Views />
      <Footer />
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
