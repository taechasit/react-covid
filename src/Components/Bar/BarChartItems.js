import React from "react";

const BarChartItems = (props) => {
  let barPadding = 2;
  let barColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let widthScale = (d) => (d / props.mostCases) * 800;

  let width = widthScale(props.cases);
  let yMid = props.barHeight * 0.5;

  return (
    <g className="bar-group">
      <text className="name-label" x="30" y={yMid} alignmentBaseline="middle">
        {props.name}
      </text>
      <rect
        className="bar"
        y={barPadding * 0.5}
        width={width}
        x="71"
        height={props.barHeight - barPadding}
        fill={barColour}
      />
      <text
        className="value-label"
        x={160}
        y={yMid}
        alignmentBaseline="middle"
      >
        {props.cases} Cases
      </text>
    </g>
  );
};

export default BarChartItems;
