import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
    </BrowserRouter>
  );
};

export default App;
