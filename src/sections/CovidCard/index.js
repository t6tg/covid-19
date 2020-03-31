import React, { useState, useEffect } from "react";
import { Col, Row, Spin } from "antd";
import "./style.css";

let deaths;
let recovery;
let now;
let newConfirm;
const apiUrl = "https://covid19.th-stat.com/api/open/today";

const useFetch = url => {
  const [datas] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    deaths = json.Deaths;
    recovery = json.Recovered;
    now = json.Confirmed;
    newConfirm = json.NewConfirmed;
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  });

  return { loading, datas };
};

function CovidCard() {
  const { loading } = useFetch(apiUrl);
  if (loading) {
    return (
      <center>
        <Spin style={{ marginTop: "100px" }} tip="Loading Data..."></Spin>
      </center>
    );
  }
  return (
    <div className="site-card-wrapper">
      <Row
        gutter={8}
        align={"middle"}
        style={{ textAlign: "center" }}
        justify={"center"}
      >
        <Col span={8}>
          <div className="card">
            <h4 style={{ color: "#fff", fontSize: "24px", fontWeight: 600 }}>
              🦠 ผู้ติดเชื้อ
            </h4>
            <h1
              style={{
                color: "#fff",
                fontSize: "140px",
                fontWeight: 600,
                marginTop: "50px"
              }}
            >
              {now}{" "}
            </h1>
            <span style={{ fontSize: "24px", color: "#fff", marginTop: "0px" }}>
              ( เพิ่มมา {newConfirm} คน )
            </span>
          </div>
        </Col>
        <Col span={8} style={{ marginLeft: "30px" }}>
          <Col span={16}>
            <div className="card2">
              <h2
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: 600
                }}
              >
                {" "}
                🏠 ผู้รักษาหาย
              </h2>
              <h1
                style={{
                  color: "#fff",
                  fontSize: "72px",
                  fontWeight: 600,
                  marginTop: "-10px"
                }}
              >
                {recovery}
                <span
                  style={{ fontSize: "18px", color: "#fff", marginTop: "0px" }}
                ></span>
              </h1>
            </div>
          </Col>
          <Col span={16} style={{ marginTop: "10px" }}>
            <div className="card3">
              <h2
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: 600
                }}
              >
                {" "}
                ⚰️ ผู้เสียชีวิต
              </h2>
              <h1
                style={{
                  color: "#fff",
                  fontSize: "72px",
                  fontWeight: 600,
                  marginTop: "-10px"
                }}
              >
                {deaths}
              </h1>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default CovidCard;
