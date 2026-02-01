import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/dashboard.css";


interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
