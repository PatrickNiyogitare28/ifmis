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
    { date: "Jan", appointments: 2, messages: 1 },
    { date: "Feb", appointments: 0, messages: 3 },
    { date: "Mar", appointments: 4, messages: 2 },
    { date: "Apr", appointments: 2, messages: 2 },
    { date: "May", appointments: 4, messages: 1 },
    { date: "Jun", appointments: 5, messages: 3 },
    { date: "Jul", appointments: 0, messages: 0 },
    { date: "Aug", appointments: 2, messages: 4 },
    { date: "Sep", appointments: 6, messages: 5 },
    { date: "Oct", appointments: 1, messages: 2 },
    { date: "Nov", appointments: 0, messages: 0 },
    { date: "Dec", appointments: 0, messages: 0 },
  ];
  

Chart.register(CategoryScale);

  // src/components/Chart.tsx



const UserBarChart: React.FC = () => {
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

export default UserBarChart;
