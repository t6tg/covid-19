import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";
import { Spin, Row, Col } from "antd";

let data = [];
let dataStat = [];

const apiUrl = "https://covid19.th-stat.com/api/open/cases/sum";
const stat = "https://covid19.th-stat.com/api/open/timeline";

const useFetch = url => {
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    data = [
      {
        ชาย: json.Gender.Male,
        หญิง: json.Gender.Female,
        ไม่ทราบ: json.Gender.Unknown
      }
    ];
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading };
};

const useFetchStat = url => {
  const [loadingStat, setLoadingStat] = useState(true);

  async function fetchDataStat() {
    const responseStat = await fetch(url);
    const jsonStat = await responseStat.json();
    jsonStat.Data.map(r => {
      dataStat.push({
        วันที่: r.Date,
        ติดเชื้อเพิ่ม: r.NewConfirmed,
        รักษาหายเพิ่ม: r.NewRecovered,
        เสียชีวิตเพิ่ม: r.NewDeaths,
        กำลังรักษาเพิ่ม: r.NewHospitalized
      });
    });
    setLoadingStat(false);
  }

  useEffect(() => {
    fetchDataStat();
  }, []);

  return { loadingStat };
};

function CovidTable() {
  const { loading } = useFetch(apiUrl);
  const { loadingStat } = useFetchStat(stat);

  if (loading || loadingStat) {
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
          <h2>แยกผู้ติดเชื้อตามเพศ</h2>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ชาย" fill="blue" />
            <Bar dataKey="หญิง" fill="red" />
            <Bar dataKey="ไม่ทราบ" fill="black" />
          </BarChart>
        </Col>
        <Col span={12}>
          <h2>อัตราการเพิ่ม</h2>
          <LineChart width={600} height={300} data={dataStat}>
            <Line type="monotone" dataKey="ติดเชื้อเพิ่ม" stroke="#f0dc26" />
            <Line type="monotone" dataKey="รักษาหายเพิ่ม" stroke="green" />
            <Line type="monotone" dataKey="เสียชีวิตเพิ่ม" stroke="red" />
            <Line type="monotone" dataKey="กำลังรักษาเพิ่ม" stroke="blue" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="วันที่" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Col>
      </Row>
    </div>
  );
}

export default CovidTable;
