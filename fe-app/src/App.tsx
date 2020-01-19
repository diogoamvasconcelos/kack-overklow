import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "antd/es/layout";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Navbar />
      <Content>
        <BrowserRouter>
          <Route path="/" component={() => <p>Content goes here...</p>} />
        </BrowserRouter>
      </Content>
    </Layout>
  );
};

export default App;
