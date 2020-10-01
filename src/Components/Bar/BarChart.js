import Axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BarChartItems from "./BarChartItems";

const BarChart = () => {
  const [datas, setData] = useState([]);
  const [date, setDate] = useState();
  const [thisIndex, setThisIndex] = useState(0);

  const testData = () => {
    Axios.get(`https://disease.sh/v3/covid-19/historical?lastdays=10`)
      .then((res) => {
        console.log(res.data);
        const dataDate = Object.keys(res.data[0].timeline.cases);
        setDate(dataDate)
        console.log(dataDate);
        const resData = [];

        dataDate.forEach((dateitem, dateindex) => {
          resData.push({ date: dateitem, data: {} });
          res.data.forEach((item, index) => {
            resData[dateindex].data[item.country] =
              item.timeline.cases[dateitem];
          });
        });

        console.log(resData);

        resData.forEach((item, index) => {
          const sorresData = Object.fromEntries(
            Object.entries(item.data).sort(([, a], [, b]) => b - a)
          );
          item.data = sorresData;
        });

        // const test = Object.keys(resData[0].data).forEach((key, index) => {
        //   console.log(key + " : " + resData[0].data[key]);
        // });

        console.log(resData);
        setData(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    testData();
  }, []);

  let barHeight = 40;

  let barGroups = null;

  if (datas[0]) {

    // console.log(datas[0].data[Object.keys(datas[0].data)[0]]);

    barGroups = Object.keys(datas[thisIndex].data).map((key, index) => {
      return (
        <g transform={`translate(0, ${index * barHeight})`} key={index}>
          <BarChartItems
            name={key}
            cases={datas[thisIndex].data[key]}
            barHeight={barHeight}
            mostCases={
              datas[thisIndex].data[Object.keys(datas[thisIndex].data)[0]]
            }
          />
        </g>
      );
    });

    if (thisIndex === datas.length-1 ) {
      setThisIndex(0);
    }else{
      setTimeout(() => {
        setThisIndex(thisIndex + 1);
      }, 1000);
    }
    
  }

  return (
    <SvgmainChart width="80%" height="100%">
      <g className="container">
        <text
          className="title"
          x="50%"
          y="30"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          Date : {date && date[thisIndex]}
        </text>
        <g className="chart" transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </SvgmainChart>
  );
};

const SvgmainChart = styled.svg`
  transition: width 0.5s ease-in;
  .title {
    font-size: 1.4em;
    font-weight: 300;
  }
  .bar {
    transition: width 0.5s ease-in;
  }

  .bar-group .name-label {
    text-anchor: end;
    font-weight: 300;
    font-size: 1em;
    fill: #333;
  }

  .bar-group .value-label {
    text-anchor: end;
    fill: #000;
    font-weight: 900;
    font-size: 0.7em;
  }

  .container .bar-group {
    transition: opacity 0.3s;
  }

  /* Fade bars when the chart is hovered */
  .container:hover .bar-group {
    opacity: 0.3;
  }

  /* But don't fade the hovered bar... */
  .container .bar-group:hover {
    opacity: 1;
  }

  .container .bar-group:hover .name-label {
    font-weight: 400;
  }

  .container .bar-group:hover .value-label {
    font-size: 0.8em;
  }
`;

export default BarChart;
