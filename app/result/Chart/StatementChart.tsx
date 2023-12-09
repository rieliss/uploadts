"use client";
import { FC, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip,
} from "chart.js";

// Define the type for DailyAmount
type DailyAmount = {
  _sum: {
    status: number;
  };
  VoteFor: String;
};

// Register the required Chart.js components
Chart.register(BarElement, LinearScale, CategoryScale, Tooltip);

type Props = {
  statement: DailyAmount[];
};

const StatementChart: FC<Props> = ({ statement }) => {
  // Returns an array of the chart labels (day)
  const labels = useMemo(() => statement.map((e) => e.VoteFor), [statement]);
  // Returns an array of the chart spending amounts (amount)
  const data = useMemo(() => statement.map((e) => e._sum.status), [statement]);

  // console.log(statement);

  // Returns the total spend for the week
  const spendingTotal = statement.reduce(
    (total, item) => total + item._sum.status,
    0
  );

  // Variables to handle bar colours
  const barColor = "rgb(232,65,71)";
  const barHovered = "rgba(232,65,71,.8)";
  const activeBarHovered = "hsla(186, 34%, 60%, .8)";
  const activeBarColor = "hsl(186, 34%, 60%)";

  return (
    <section
      aria-label="Statement Chart"
      className="w-full bg-white text-black flex flex-col justify-center rounded-xl p-8"
    >
      <h2 className="font-semibold text-xl md:text-2xl">
        Total voting results - Now
      </h2>
      <div className="w-full mt-14 h-48">
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: "Daily Amount",
                data,
                backgroundColor: labels.map((label, index) => {
                  const today = new Date()
                    .toLocaleString("en-US", { weekday: "short" })
                    .toLowerCase();
                  return label.toLowerCase() === today
                    ? activeBarColor
                    : barColor;
                }),
                borderSkipped: false,
                borderRadius: 5,
                hoverBackgroundColor: labels.map((label, index) => {
                  const today = new Date()
                    .toLocaleString("en-US", { weekday: "short" })
                    .toLowerCase();
                  return label.toLowerCase() === today
                    ? activeBarHovered
                    : barHovered;
                }),
              },
            ],
          }}
          options={{
            plugins: {
              tooltip: {
                enabled: true,
                backgroundColor: "black",
                padding: 10,
                caretSize: 0,
                usePointStyle: true,
                displayColors: false,
                yAlign: "bottom",
                xAlign: "center",
                position: "nearest",
                footerMarginTop: 42,
                callbacks: {
                  label: function (context) {
                    const value = context.parsed.y;
                    return `${String(value.toFixed(0))}`;
                  },
                  title: function () {
                    return "";
                  },
                },
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: true,
                ticks: {
                  color: "slategrey",
                },
                grid: {
                  display: false,
                },
              },
              y: {
                display: false,
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default StatementChart;
