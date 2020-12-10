import React from "react";
import styled from "styled-components";

export default function Photo(props) {
  const { nasaData } = props;
  console.log();
  return (
    <StyledPhoto>
      <h1>{nasaData.title}</h1>
      <p>{nasaData.date}</p>
      <p>{nasaData.mediaType}</p>
      <img src={nasaData.url} alt={nasaData.copyright} />
      <p class="explain">{nasaData.explanation}</p>
    </StyledPhoto>
  );
}

const StyledPhoto = styled.div`
  h1 {
    color: ${(pr) => pr.theme.primaryColor};
    &:hover {
      color: aqua;
      transform: rotate(360deg);
      transition: all 1s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }
  p {
    display: flex;
    justify-content: center;
    color: ${(pr) => pr.theme.secondColor};
  }
  .explain {
    padding: 50px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    &:hover {
      color: #32cd32;
      transition: all 0.5s ease-in-out;
      transform: scale(1.1);
      background-color: black;
    }
    transition: all 0.5s ease-in-out;
  }
  background-image: url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  border: red solid 2px;
  padding: 25px;
  margin: 0 auto;
`;
