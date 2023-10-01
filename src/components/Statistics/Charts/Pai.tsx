
import React from "react";
import { Pie } from "react-chartjs-2";


export default function UsersPieChart({verified, nonVerified}: {verified: number, nonVerified: number}) {
 
  const chartData = {
    labels: ["Verified Users", "Not Verified Users"],
    datasets: [
      {
        data: [verified, nonVerified],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

