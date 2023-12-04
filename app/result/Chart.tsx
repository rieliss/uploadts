// "use client";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   BarElement,
//   PointElement,
//   LineElement,
//   ChartData,
//   ChartOptions,
// } from "chart.js";
// import { useEffect, useState } from "react";
// import { Bar, Line } from "react-chartjs-2";

// // Register ChartJS components using ChartJS.register
// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip
// );

// interface LineProps {
//   options: ChartOptions<"line">;
//   data: ChartData<"line">;
// }

// type ChartComponent = {
//   label: string;
//   data: number[];
//   borderColor: string;
//   backgroundColor: string;
// };

// // export const MyLineChart = ({ id, status }: Props) => {
// //   return (
// //     <div>
// //       <Line
// //         data={{
// //           labels: [id],
// //           datasets: [
// //             {
// //               data: [status],
// //               backgroundColor: "purple",
// //             },
// //           ],
// //         }}
// //       />
// //     </div>
// //   );
// // };

// export const MyBarChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: String,
//     datasets: [
//       {
//         label: String,
//         data: Number,
//         borderColor: String,
//         backgroundColor: String,
//       },
//     ],
//   });

//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//     setChartData({
//       labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//       datasets: [
//         {
//           label: "Sales $",
//           data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
//           // borderColor: "rgb(53,162,235)",
//           backgroundColor: "rgba(53,162,135,0.4)",
//         },
//       ],
//     });
//     setChartOptions({
//       plugins: {
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "Daily Revenue",
//         },
//       },
//       maintainAspectRatio: false,
//       reponsive: true,
//     });
//   }, []);

//   return (
//     <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] p-4 border rounded-lg bg-white">
//       <Bar data={chartData} options={chartOptions} />
//     </div>
//   );
// };
