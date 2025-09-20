import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const SalaryChart = () => {
  
  const data = [
    { day: "Mon", salary: 100 },
    { day: "Tue", salary: 200 },
    { day: "Wed", salary: 150 },
    { day: "Thu", salary: 300 },
    { day: "Fri", salary: 250 },
    { day: "Sat", salary: 400 },
    { day: "Sun", salary: 350 },
  ];

  return (
    <div className="w-full h-52">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#E0F0E5" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryChart;
