import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";

const apiUrl = "https://api.covid19api.com/summary";

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
  const { loading, datas } = useFetch(apiUrl);
  if (loading) {
    return (
      <center>
        <Spin style={{ marginTop: "100px" }} tip="Loading Data..."></Spin>
      </center>
    );
  }
  const columns = [
    {
      title: "ชื่อประเทศ",
      dataIndex: "Country",
      key: "Country"
    },
    {
      title: "ผู้ติดเชื่อ",
      dataIndex: "TotalConfirmed",
      key: "TotalConfirmed",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed
    },
    {
      title: "หายแล้ว",
      dataIndex: "TotalRecovered",
      key: "TotalRecovered",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.TotalRecovered - b.TotalRecovered
    },
    {
      title: "เสียชีวิต",
      dataIndex: "TotalDeaths",
      key: "TotalDeaths",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.TotalDeaths - b.TotalDeaths
    }
  ];

  return (
    <div>
      {loading ? (
        <Table loading={loading}></Table>
      ) : (
        <Table columns={columns} dataSource={datas.Countries}></Table>
      )}
    </div>
  );
}

export default CovidTable;
