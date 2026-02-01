import AppLayout from "../components/AppLayout";
import StatCard from "../components/StatCard";
import UserTable from "../components/UserTable";
import SalesChart from "../components/SalesChart";
import { Stats } from "../data/appData";

const Dashboard = ({ stats }: { stats: Stats }) => {
  return (
    <AppLayout>
      <div className="row g-3">
        <StatCard title="Users" value={stats.users.toString()} />
        <StatCard title="Revenue" value={`₹${stats.revenue / 1000}L`} />
        <StatCard title="Orders" value={stats.orders.toString()} />
        <StatCard title="Growth" value={`+${stats.growth}%`} />
      </div>

      <div className="mt-4">
        <SalesChart />
      </div>

      <div className="mt-4">
        <UserTable />
      </div>
    </AppLayout>
  );
};

export default Dashboard;
