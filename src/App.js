import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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

function App() {
  const { loading, datas } = useFetch(
    "https://raw.githubusercontent.com/BlankerL/DXY-COVID-19-Data/master/json/DXYArea.json"
  );
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {datas.results.map(data => {
            if (data.countryEnglishName != null)
              return (
                <div>
                  <li key={data.locationId}>{data.countryEnglishName}</li>
                  <li>{data.confirmedCount}</li>
                </div>
              );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
