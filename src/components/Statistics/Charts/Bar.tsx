import React from 'react';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { Bar } from 'react-chartjs-2';

export interface ChartDataItem {
    date: string;
    appointments: number;
    messages: number;
}

// src/data.ts

export const chartData: ChartDataItem[] = [
    { date: "Jan", appointments: 5, messages: 10 },
    { date: "Feb", appointments: 7, messages: 12 },
    { date: "Mar", appointments: 8, messages: 15 },
    { date: "Apr", appointments: 10, messages: 18 },
    { date: "May", appointments: 12, messages: 2 },
    { date: "Jun", appointments: 20, messages: 14 },
    { date: "Jul", appointments: 6, messages: 4 },
    { date: "Aug", appointments: 5, messages: 6 },
    { date: "Sep", appointments: 12, messages: 15 },
    { date: "Oct", appointments: 4, messages: 1 },
    { date: "Nov", appointments: 0, messages: 0 },
    { date: "Dec", appointments: 0, messages: 0 },
  ];
  

Chart.register(CategoryScale);

  // src/components/Chart.tsx



const BarChart: React.FC = () => {
  const chartLabels = chartData.map((data: ChartDataItem) => data.date);

  const chartConfig = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Appointments',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: chartData.map((data: ChartDataItem) => data.appointments),
      },
      {
        label: 'Messages',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: chartData.map((data: ChartDataItem) => data.messages),
      },
    ],
  };

  return (
    <div>
      <Bar data={chartConfig} />
    </div>
  );
};

export default BarChart;
