import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Layout } from "antd";

import { reducer } from "./reducers";
import QuestionsList from "./components/QuestionsList";

const store = createStore(reducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout className="layout">
        <Navbar />
        <Layout.Content>
          <BrowserRouter>
            <Route path="/" component={QuestionsList} />
          </BrowserRouter>
        </Layout.Content>
        <Footer />
      </Layout>
    </Provider>
  );
};
export default App;
