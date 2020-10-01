import React from "react";
import styled from "styled-components";
import BarChart from "../Components/Bar/BarChart";


const Home = () => {
  return (
    <HomeMain>
        <BarChart></BarChart>
    </HomeMain>
  );
};

const HomeMain = styled.main`
  width: 80%;
  height: ${40*200}px;
  margin: 0% auto;
  padding-top: 60px;
  background-color: #ececec;
  font-family: Alata, sans-serif;
  text-align: center;
`;

export default Home;
