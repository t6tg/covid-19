import React from "react";
import "./style/App.css";
import CovidTable from "./sections/CovidTable/index";
import CovidCard from "./sections/CovidCard";
import { Menu, Layout } from "antd";
const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Covid Thailand By Thanawat Gulati</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <CovidCard />
          <div className="site-layout-content">
            <CovidTable />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Covid-19 ©2020 Created by Thanawat Gulati
        </Footer>
      </Layout>
    </div>
  );
}
