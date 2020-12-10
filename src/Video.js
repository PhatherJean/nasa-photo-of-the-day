import React from "react";
import Iframe from "react-iframe";
export default function Video(props) {
  const { nasaData } = props;
  console.log();
  return (
    <div>
      <h1>{nasaData.title}</h1>
      <p>{nasaData.date}</p>
      <p>{nasaData.mediaType}</p>
      <img src={nasaData.url} alt={nasaData.copyright} />
      <p>{nasaData.explanation}</p>
    </div>
  );
}
