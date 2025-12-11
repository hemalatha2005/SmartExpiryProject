import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

export default function ExpiryTrendChart({ dataPoints = [] }) {

  // If backend data not given, default sample data
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const values = dataPoints.length > 0 ? dataPoints : [3, 5, 2, 4, 1, 6, 3];

  const data = {
    labels,
    datasets: [
      {
        label: "Items Expiring",
        data: values,
        borderColor: "rgb(34,197,94)",      // green line
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.3,                        // curve
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
      }
    ]
  };

  const options = {
    responsive: true,
    animations: {
      tension: {
        duration: 1500,
        easing: "easeInOutQuad",
        from: 0.5,
        to: 0.3,
        loop: false
      }
    }
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
}
