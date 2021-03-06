import React from "react";
import { Button, Input, Layout } from "antd";

const { Search } = Input;
const { Header } = Layout;

const Navbar: React.FC = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Search
        placeholder="Search..."
        onSearch={value => console.log(value)}
        style={{ width: 400 }}
      />
      <Button type="primary" onClick={() => console.log("Log in")}>
        Log in{" "}
      </Button>
      <Button type="default" onClick={() => console.log("Sign up")}>
        Sign up
      </Button>
    </Header>
  </Layout>
);

export default Navbar;
