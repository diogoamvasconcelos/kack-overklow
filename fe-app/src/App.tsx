import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Layout } from "antd";

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
      <Footer />
    </Layout>
  );
};

export default App;
