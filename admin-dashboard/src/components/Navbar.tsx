import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-white px-4">
      <span className="navbar-brand fw-semibold">Dashboard</span>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
