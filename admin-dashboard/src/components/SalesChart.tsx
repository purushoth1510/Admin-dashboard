import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue (₹)",
        data: [12000, 19000, 15000, 22000, 18000, 25000, 23000],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.15)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: any) => `₹${value}`,
        },
      },
    },
  };

  return (
    <div className="card shadow-sm">
    <div className="card-body">
    <h5 className="mb-3">Sales Analytics</h5>
    <div style={{ height: "260px" }}>
        <Line data={data}
  options={{
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  }} />
      </div>
      </div>
    </div>
  );
};

export default SalesChart;
