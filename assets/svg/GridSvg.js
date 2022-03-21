import React from "react";

const GridSvg = ({
  width = 10,
  height = 10,
  space = 10,
  radius = 1.5,
  fill = "#000000",
  fillOpacity = 0.4,
}) => {
  const viewWidth = width * radius * 2 + (width - 1) * (space - radius * 2);
  const viewHeight = height * radius * 2 + (height - 1) * (space - radius * 2);
  let dots = [];

  for (let indexWidth = 0; indexWidth < width; indexWidth++) {
    for (let indexHeight = 0; indexHeight < height; indexHeight++) {
      dots.push(
        <circle
          key={`${indexWidth}-${indexHeight}`}
          cx={radius + indexWidth * space}
          cy={radius + indexHeight * space}
          r={radius}
        />
      );
    }
  }

  return (
    <svg
      width={viewWidth}
      height={viewHeight}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      version="1.1"
    >
      <g fill="#aaaaaa" fillOpacity={fillOpacity}>
        {dots}
      </g>
    </svg>
  );
};

export default GridSvg;
