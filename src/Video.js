import React from "react";

export default function Video(props) {
  const { video } = props;
  return (
    <Video
      width="960"
      height="540"
      src={video.url}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen=""
    />
  );
}
