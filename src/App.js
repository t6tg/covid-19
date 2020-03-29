import React from "react";
import "./style/App.css";
import CovidTable from "./sections/CovidTable/index";
import CovidCard from "./sections/CovidCard";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
        <Header style={{ height: "600px", backgroundColor: "#353538" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 600,
              color: "#FF3A81",
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "-20px"
            }}
          >
            COVID-19 🇹🇭
          </h1>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              marginTop: "40px"
            }}
          >
            Thailand Realtime Data
          </h1>
          <CovidCard />
        </Header>
        <Content style={{ padding: "0 50px" }}>
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
