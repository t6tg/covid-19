import React, { useState, useEffect } from "react";
import { Table } from "antd";

const useFetch = url => {
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, datas };
};

function CovidTable() {
  const { loading, datas } = useFetch(
    "https://raw.githubusercontent.com/BlankerL/DXY-COVID-19-Data/master/json/DXYArea.json"
  );
  const columns = [
    {
      title: "ชื่อประเทศ",
      dataIndex: "countryEnglishName",
      key: "countryEnglishName"
    },
    {
      title: "เมือง",
      dataIndex: "provinceEnglishName",
      key: "provinceEnglishName"
    },
    {
      title: "จำนวนที่ยืนยันแล้ว",
      dataIndex: "confirmedCount",
      key: "confirmedCount",
      sorter: (a, b) => a.confirmedCount - b.confirmedCount
    },
    {
      title: "จำนวนผู้เสียชีวิต",
      key: "deadCount",
      dataIndex: "deadCount",
      sorter: (a, b) => a.deadCount - b.deadCount
    },
    {
      title: "จำนวนผู้รักษาหายแล้ว",
      key: "curedCount",
      dataIndex: "curedCount",
      sorter: (a, b) => a.curedCount - b.curedCount
    }
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      {}
      {loading ? (
        <Table loading={loading}></Table>
      ) : (
        <Table
          columns={columns}
          dataSource={datas.results}
          onChange={onChange
        ></Table>
      )}
    </div>
  );
}

export default CovidTable;
