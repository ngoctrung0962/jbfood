import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
    },

    // bỏ đường kẻ ngang
  },
  maintainAspectRatio: false,

  responsive: true,
  interaction: {
    mode: "index",

    intersect: false,
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: "#777777",
      },
    },
    y: {
      display: false,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
      },
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40, 20, 10, 5, 2, 1],
      borderColor: "#FF963C",
      backgroundColor: "#FF963C",
    },
    {
      label: "Dataset 2",
      data: [70, 64, 85, 86, 61, 60, 45, 25, 15, 10, 10, 26],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

export function ChartBodyFat() {
  return <Line options={options} data={data} width={"580px"} height={"300"} />;
}
