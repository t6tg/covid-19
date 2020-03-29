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
import moment from "moment";

let data = [];
let dataWorld = [];

const apiUrl =
  "https://api.covid19api.com/total/country/thailand/status/confirmed";
const world = "https://api.covid19api.com/summary";

const useFetch = url => {
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    json.map(r => {
      data.push({
        name: moment(r.Date)
          .utc()
          .format("DD/MM/YYYY"),
        Case: r.Cases
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
  const { loading, datas } = useFetch(apiUrl);
  const { loadingw, dataw } = useFetchWorld(world);

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
            <Line type="monotone" dataKey="Case" stroke="#f0dc26" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
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
