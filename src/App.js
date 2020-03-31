import React, { useState, useEffect } from "react";
import "./style/App.css";
import Gender from "./sections/Gender";
import CovidTable from "./sections/CovidTable/index";
import CovidCard from "./sections/CovidCard";
import CovidChart from "./sections/CovidChart";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const apiUrl = "https://covid19.th-stat.com/api/open/today";
let date;
const useFetch = url => {
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    date = json.UpdateDate;
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  });

  return { loading };
};

export default function App() {
  useFetch(apiUrl);
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
            <h4 align="right" style={{ color: "#b92246" }}>
              Update at : {date}
            </h4>
            <h5 align="right" style={{ color: "green" }}>
              ( Data From covid19api and WHO และ กรมควบคุมโรค )
            </h5>
            <CovidChart />
            <br />
            <Gender />
            <br />
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
