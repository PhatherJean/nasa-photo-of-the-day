import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Video from "./Video";

const url = "https://api.nasa.gov/planetary/apod";
const apiKey = "api_key=DEMO_KEY";
function App() {
  const [nasaData, setNasaData] = useState(null);
  useEffect(() => {
    axios
      .get(`${url}?${apiKey}`)
      .then((res) => {
        setNasaData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Video video={video} src={video.url} />
    </div>
  );
}

export default App;
