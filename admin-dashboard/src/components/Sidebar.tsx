import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "active" : "";

  return (
    <div className="sidebar p-3">
      <h5 className="mb-4">Admin</h5>

      <div
        className={`sidebar-item ${isActive("/dashboard")}`}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </div>

      <div
        className={`sidebar-item ${isActive("/users")}`}
        onClick={() => navigate("/users")}
      >
        Users
      </div>

      <div
        className={`sidebar-item ${isActive("/settings")}`}
        onClick={() => navigate("/settings")}
      >
        Settings
      </div>
    </div>
  );
};

export default Sidebar;
