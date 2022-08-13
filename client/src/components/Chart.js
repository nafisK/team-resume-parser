import React from "react";
import "./chart.css"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// import data_file from "./Nafisa-v1-Sample-Data.json";

const data = [
  {
    name: "8/6/22",
    Applicants: 20,
    Hired: 60,
    amt: 2400,
  },
  {
    name: "8/7/22",
    Applicants: 35,
    Hired: 25,
    amt: 2210,
  },
  {
    name: "8/8/22",
    Applicants: 90,
    Hired: 50,
    amt: 2290,
  },
  {
    name: "8/9/22",
    Applicants: 50,
    Hired: 20,
    amt: 2000,
  },
  {
    name: "8/10/22",
    Applicants: 25,
    Hired: 40,
    amt: 2181,
  },
  {
    name: "8/11/22",
    Applicants: 40,
    Hired: 70,
    amt: 2500,
  },
  {
    name: "8/12/22",
    Applicants: 20,
    Hired: 50,
    amt: 2100,
  },
];

export default function LineGraph() {
  return (
    <div>
        <LineChart
        width={700}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 60,
            bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="1 1" strokeWidth={2}/>
        <XAxis dataKey="name" strokeWidth={2}/>
        <YAxis strokeWidth={2}/>
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="Applicants"
            stroke="#8884d8"
            strokeWidth={3}
            activeDot={{ r: 8 }}
        />
        <Line type="monotone" strokeWidth={3} dataKey="Hired" stroke="#82ca9d" />
        </LineChart>
    </div>
  );
}