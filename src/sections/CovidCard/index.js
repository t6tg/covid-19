import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import "./style.css";
let thaicurrentConfirmedCount;
let thaidead;
let thaicuredCount;
let update;
const useFetch = url => {
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    json.results.map(datax => {
      if (datax.countryEnglishName === "Thailand") {
        thaicurrentConfirmedCount = datax.confirmedCount;
        thaidead = datax.deadCount;
        thaicuredCount = datax.curedCount;
        update = datax.updateTime;
      }
    });
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading };
};

function CovidCard() {
  const { loading } = useFetch(
    "https://raw.githubusercontent.com/BlankerL/DXY-COVID-19-Data/master/json/DXYArea.json"
  );

  return (
    <div className="site-card-wrapper">
      <h1>Update at : {new Date(update).toLocaleDateString("en-US")}</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="จำนวนผู้ติดเชื้อรวมในไทย"
            style={{ backgroundColor: "#f0ad4e" }}
            loading={loading}
            bordered={false}
          >
            <h1>{thaicurrentConfirmedCount} คน</h1>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="จำนวนผู้รักษาหายแล้วในไทย"
            style={{ backgroundColor: "#5cb85c" }}
            loading={loading}
            bordered={false}
          >
            <h1>{thaicuredCount} คน</h1>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="จำนวนผู้เสียชีวิตในไทย"
            style={{ backgroundColor: "#d9534f" }}
            loading={loading}
            bordered={false}
          >
            <h1>{thaidead} คน</h1>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CovidCard;