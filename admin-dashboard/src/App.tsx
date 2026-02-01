import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { initialStats, Stats } from "./data/appData";

function App() {
  const [stats, setStats] = useState<Stats>(initialStats);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard stats={stats} />}
        />
        <Route
          path="/users"
          element={<Users stats={stats} setStats={setStats} />}
        />
        <Route
          path="/settings"
          element={<Settings stats={stats} setStats={setStats} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
