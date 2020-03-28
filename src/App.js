import React from "react";
import "./style/App.css";
import CovidTable from "./sections/CovidTable/index";
import { Breadcrumb, Menu, Layout } from "antd";
const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <br />
          <div className="site-layout-content">
            <CovidTable />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
