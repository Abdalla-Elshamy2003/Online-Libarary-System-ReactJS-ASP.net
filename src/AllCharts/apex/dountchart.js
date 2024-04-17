import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const series = [44, 55, 41];
  const options = {
    labels: ["Series 1", "Series 2", "Series 3"],
    colors: ["#34c38f", "#506E5C", "#163C26"],
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: false,
      fontSize: "14px",
      offsetX: 0,
      offsetY: -10,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height="380"
    />
  );
};

export default DonutChart;
