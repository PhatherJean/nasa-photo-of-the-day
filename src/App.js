import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Video from "./Video";

const url = "https://api.nasa.gov/planetary/apod";
const apiKey = "api_key=R1b6wcyislpIFTxjxIC7pBKrtZwut4XGToHWcTPg";
function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const fetchNasaData = () => {
      axios
        .get(`${url}?${apiKey}`)
        .then((res) => {
          setNasaData(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchNasaData();
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Video nasaData={nasaData} />
    </div>
  );
}

export default App;
