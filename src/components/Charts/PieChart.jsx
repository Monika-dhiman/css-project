import React from "react";
import Chart from "react-apexcharts";
import "./style.css";
const PieChart = () => {
  const param = {
    data: [55, 31, 14],
  };

  const data = {
    options: {
      chart: {
        width: 134,
        type: "pie",
        
      },
    //   plotOptions: {
    //     pie: {
    //       startAngle: 360, // 180 degrees anti-clockwise
    //     },
    //   },
    stroke: {
        width: 0, // removes the border
      },
      dataLabels: {
        enabled: false,
      },
      
      colors: ['#98D89E', '#F6DC7D', '#EE8484'],
      labels: [`<span>Basic Tree<br />55%</span>`, `<span>Custom Hot Pant<br />31%</span>`, `<span>Super Hoodie<br />14%</span>`],
      legend: {
        show: false
        // fontSize: "14px",
        // fontWeight: 700,
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 134,
            },
            legend: {
              position: "bottom",
              
            },
          },
        },
      ],
    },
  };
  const labels = ['Basic Tree', 'Custom Hot Pant', 'Super Hoodie'];
  const colors = ['#98D89E', '#F6DC7D', '#EE8484'];
  return (
    <div className="pie-chart-container"> 
    <div> 
          <Chart
            options={data.options}
            series={param.data}
            type="pie"
            height="170px"
          />
          </div> 
     <div className="custom-legend">
        {labels.map((label, index) => (
            <div key={index} className="legend-item">
            <div className="legend-color" style={{backgroundColor: colors[index]}}></div>
            <span className="legend-label">{label}<br />
            <span className="legend-percentage">{param.data[index]}%</span></span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PieChart;
