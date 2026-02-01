import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Stats } from "../data/appData";

const Settings = ({
  stats,
  setStats,
}: {
  stats: Stats;
  setStats: React.Dispatch<React.SetStateAction<Stats>>;
}) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />

        <div className="content-wrapper">
          <h4>Settings</h4>

          <button
            className="btn btn-primary me-2"
            onClick={() =>
              setStats({ ...stats, revenue: stats.revenue + 10000 })
            }
          >
            Increase Revenue
          </button>

          <button
            className="btn btn-warning"
            onClick={() =>
              setStats({ ...stats, growth: stats.growth + 1 })
            }
          >
            Increase Growth
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
