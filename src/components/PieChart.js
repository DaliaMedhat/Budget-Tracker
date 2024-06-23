import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

const PieChart = ({ income, expenses }) => {
  const [chartData, setChartData] = useState(null);
  Chart.register(ArcElement);
  useEffect(() => {
    const data = {
      labels: ["Income", "Expenses"],
      datasets: [
        {
          label: "Income vs Expenses",
          data: [income, expenses],
          backgroundColor: ["rgb(34 197 94)", "rgb(220 38 38)"],
          hoverOffset: 4,
          hoverBackgroundColor: ["rgb(21 128 61)", "rgb(153 27 27)"],
        },
      ],
    };
    setChartData(data);
  }, [income, expenses]);

  return (
    <div>
      <p className="pie-chart-text">
        <span className="text-green-600">
          {income ? `Total Income: ${income}€` : `Total Income: 0€`}
        </span>
        <br />
        <span className="text-red-600">
          {expenses ? `Total Expenses: ${expenses}€` : `Total Expenses: 0€`}
        </span>
      </p>
      {chartData && (
        <Pie
          className="bg-gray-200 rounded-lg shadow-xl p-8"
          data={chartData}
        />
      )}
    </div>
  );
};

export default PieChart;
