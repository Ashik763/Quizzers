import React from "react";
import { useLoaderData } from "react-router-dom";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./Statistics.css";




// const data = [
//   {
//     name: 'Page A',
//     uv: 14000,
 
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
   
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
  
//   },


// ];
const Statistics = () => {
  // const data = useLoaderData().data;
  // const obj =

  const data =[{name:"React",uv:8},
  {name:"JavaScript",uv:9},
  {name:"CSS",uv:8},
  {name:"Git",uv:11}];



  return (
    <div className="d-flex justify-content-center mt-5">
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
     
    </div>
  );
};

export default Statistics;
