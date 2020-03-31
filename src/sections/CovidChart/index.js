import React, { useState, useEffect } from "react";
import {
  LineChart,
  BarChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip
} from "recharts";
import { Spin, Row, Col } from "antd";

let data = [];
let dataWorld = [];

const apiUrl = "https://covid19.th-stat.com/api/open/timeline";
const world = "https://api.covid19api.com/summary";

const useFetch = url => {
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    json.Data.map(r => {
      data.push({
        วันที่: r.Date,
        ติดเชื้อ: r.Confirmed,
        รักษาหายแล้ว: r.Recovered,
        เสียชีวิต: r.Deaths,
        กำลังรักษา: r.Hospitalized
      });
    });
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, datas };
};

const useFetchWorld = url => {
  const [dataw, setDataw] = useState(null);
  const [loadingw, setLoadingw] = useState(true);

  async function fetchDataWorld() {
    const response = await fetch(url);
    const jsonw = await response.json();
    jsonw.Countries.map(rw => {
      dataWorld.push({
        name: rw.Country,
        TotalConfirmed: rw.TotalConfirmed
      });
    });
    setDataw(jsonw);
    setLoadingw(false);
  }

  useEffect(() => {
    fetchDataWorld();
  }, []);

  return { loadingw, dataw };
};

function CovidTable() {
  const { loading } = useFetch(apiUrl);
  const { loadingw } = useFetchWorld(world);

  if (loading || loadingw) {
    return (
      <center>
        <Row justify={"center"}>
          <Col span={12}>
            <Spin tip="Loading chart . . . . " />
          </Col>
          <Col span={12}>
            <Spin tip="Loading chart . . . . " />
          </Col>
        </Row>
      </center>
    );
  }
  return (
    <div>
      <Row justify={"center"}>
        <Col span={12}>
          <h2>ผู้ติดเชื้อในไทย</h2>
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="ติดเชื้อ" stroke="#f0dc26" />
            <Line type="monotone" dataKey="รักษาหายแล้ว" stroke="green" />
            <Line type="monotone" dataKey="เสียชีวิต" stroke="red" />
            <Line type="monotone" dataKey="กำลังรักษา" stroke="blue" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="วันที่" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Col>
        <Col span={12}>
          <h2>ผู้ติดเชื้อทั่วโลก</h2>
          <BarChart width={600} height={300} data={dataWorld}>
            <Bar type="monotone" dataKey="TotalConfirmed" stroke="#f0dc26" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </Col>
      </Row>
    </div>
  );
}

export default CovidTable;
