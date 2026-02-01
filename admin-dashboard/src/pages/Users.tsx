import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Stats } from "../data/appData";

const Users = ({
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
          <h4>Users</h4>
          <p>Total Users: {stats.users}</p>

          <button
            className="btn btn-success me-2"
            onClick={() =>
              setStats({ ...stats, users: stats.users + 1 })
            }
          >
            Add User
          </button>

          <button
            className="btn btn-danger"
            onClick={() =>
              setStats({ ...stats, users: stats.users - 1 })
            }
          >
            Remove User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
