
import React from "react";
import { Pie } from "react-chartjs-2";


export const userData = [
    { id: 1, name: "User 1", verified: true },
    { id: 2, name: "User 2", verified: false },
    { id: 3, name: "User 3", verified: true },
    // Add more user data here
  ];

  // src/components/UserPieChart.tsx


const UserPieChart: React.FC = () => {
  // Calculate the counts of verified and not verified users
  const verifiedCount = userData.filter((user) => user.verified).length;
  const notVerifiedCount = userData.length - verifiedCount;

  const chartData = {
    labels: ["Verified Users", "Not Verified Users"],
    datasets: [
      {
        data: [verifiedCount, notVerifiedCount],
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

export default UserPieChart;
