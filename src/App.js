// src/App.js
import React, { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import ScannerPage from "./pages/ScannerPage"; // keep your scanner page file

export default function App() {
  const [view, setView] = useState("dashboard");
  return (
    <>
      {view === "dashboard" ? (
        <DashboardPage onShowScanner={() => setView("scanner")} />
      ) : (
        <ScannerPage onShowDashboard={() => setView("dashboard")} />
      )}
    </>
  );
}
