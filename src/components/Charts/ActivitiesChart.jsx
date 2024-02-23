import React from "react";
import Chart from "react-apexcharts";
import "./style.css";

const ActivitiesChart = () => {
  const param = {
    series: [
      {
        color: "#9BDD7C",
        name: "Guest",
        data: [0, 200, 300, 400, 500],
      },
      {
        name: "User",
        data: [0, 300, 100, 400, 200, 100],
        color: "#E9A0A0",
      },
    ],
  };

  const data = {
    options: {
      chart: {
        type: "area",
        height: "20",
        toolbar: { show: false },
        zoom: {
          enabled: false,
        },
      },
      yaxis: {
        min: 0,
        max: 500,
        tickAmount: 5, // number of intervals (500/100 = 5)
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
        offsetY: "-50",
      },
      tooltip: {
        x: {
          format: "text",
        },
      },
      zoom: {
        enabled: false,
      },
      grid: {
        show: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.0,
          opacityTo: 0.0,
          stops: [20, 100, 100, 100],
        },
      },

      title: {
        text: "Activities",
        align: "left",
        offsetX: 14,
      },
      subtitle: {
        text: "May-june 2021 ",
        align: "left",
        offsetX: 14,
      },
      xaxis: {
        categories: [" ", "Week 1", "Week 2", "Week 3", "Week 4", " "],
      },
    },
  };
  return (
    <div className="chart">
      <Chart
        options={data.options}
        series={param.series}
        type="area"
        height="100%"
      />
    </div>
  );
};

export default ActivitiesChart;
