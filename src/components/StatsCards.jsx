import { Line } from "react-chartjs-2";
import "chart.js/auto";

const StatsCard = ({ title, count, men, women, percentage, dataPoints }) => {
  // Chart data configuration
  const data = {
    labels: Array(dataPoints.length).fill(""), // Empty labels for simplicity
    datasets: [
      {
        data: dataPoints,
        borderColor: "#FF5A5F",
        backgroundColor: "rgba(255, 90, 95, 0.2)",
        fill: true,
        tension: 0.4, // Smooth curve for the line
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-white shadow-md text-left border border-gray-200 w-full">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <p className="text-3xl font-bold text-gray-900">{count}</p>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          <p>{men} Men</p>
          <p>{women} Women</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col items-center justify-between mt-4">
          <div className="flex items-center text-xs text-red-500 font-semibold">
            <span>{percentage}</span>
            <span className="ml-1">&uarr;</span>
          </div>

          <div className="relative w-24 h-12">
            <Line data={data} options={options} />
          </div>
        </div>

        <div className="text-xs bg-[#FFEFE7] text-red-500 px-2 py-1 rounded-md w-fit">
          {percentage} Past month
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
