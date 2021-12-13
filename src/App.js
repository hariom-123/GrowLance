import React from "react";
import "./App.css";

const SVG_WIDTH = 800;
const SVG_HEIGHT = 500;

const N = 20;
var data = [];
for(let i=0;i<N;i=i+1)
{
  data.push(20+ Math.floor(Math.random()*81));
}

function App() {
  const x0 = 50;
  const xAxisLength = SVG_WIDTH - x0 * 2;

  const y0 = 50;
  const yAxisLength = SVG_HEIGHT - y0 * 2;

  const xAxisY = y0 + yAxisLength;
  
  const dataYMax=100;
  const dataYMin=0;
  const dataYRange = dataYMax - dataYMin;

  const numYTicks = 5;

  const barPlotWidth = xAxisLength / data.length;

  return (
    <div id='graph'>
    <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      {/* X axis */}
      <line
        x1={x0}
        y1={xAxisY}
        x2={x0 + xAxisLength}
        y2={xAxisY}
        stroke="grey"
        stroke-width="2px"
      />
      <text x={x0 + xAxisLength + 5} y={xAxisY + 4}>
        x
      </text>

      {/* Y axis */}
      <line 
      x1={x0} 
      y1={y0} 
      x2={x0} 
      y2={y0 + yAxisLength} 
      stroke="grey" 
      stroke-width="2px"
      />

      {Array.from({ length: numYTicks }).map((_, index) => {
        const y = y0 + index * (yAxisLength / numYTicks);

        const yValue = Math.round(dataYMax - index * (dataYRange / numYTicks));

        return (
          <g key={index}>
            <line x1={x0} y1={y} x2={x0 - 5} y2={y} stroke="grey" />
            <text x={x0 - 5} y={y + 5} textAnchor="end">
              {yValue}
            </text>
          </g>
        );
      })}
      <text x={x0} y={y0 - 8} textAnchor="middle">
        y
      </text>

      {/* Bar plots */}
      {data.map((dataY, index) => {
        const x = x0 + index * barPlotWidth;

        const yRatio = (dataY - dataYMin) / dataYRange;

        const y = y0 + (1 - yRatio) * yAxisLength;
        const height = yRatio * yAxisLength;

        const sidePadding = 10;

        return (
          <g key={index}>
            <rect class = "bar"
              x={x + sidePadding / 2}
              y={y}
              width={barPlotWidth - sidePadding}
              height={height}
              fill="blue"
            />
            <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle">
              {index}
            </text>
            <text x={x + barPlotWidth / 2} y={xAxisY - 4*data[index] - 2 } textAnchor="middle">
              {data[index]}
            </text>
          </g>
        );
      })}
      

    </svg>
    <h2>Pls click to create new random graph <a href="index.js">Click!</a></h2>
    </div>
  );
}

export { App,data};