import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Skill", "Applicants with Skill"],
  ["Python", 550],
  ["C++", 200],
  ["Java", 150],
  ["React.js", 400],
  ["UI/UX", 100],
];


export function Pie() {
  return (
    <div>
    <h3 className="applicants">SKILLS</h3>
    <Chart
      chartType="PieChart"
      data={data}
      width={300}
      height={200}
    />
    </div>
  );
}
