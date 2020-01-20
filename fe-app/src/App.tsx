import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Layout } from "antd";

import QuestionsList from "./components/QuestionsList";

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Navbar />
      <Layout.Content>
        <BrowserRouter>
          <Route path="/" component={QuestionsList} />
        </BrowserRouter>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};
export default App;
