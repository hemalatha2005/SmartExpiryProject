import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import ScannerPage from "./pages/ScannerPage";
import CookingInsights from "./pages/CookingInsights";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar always visible */}
      <Sidebar
        onShowDashboard={() => setPage("dashboard")}
        onShowScanner={() => setPage("scanner")}
      />

      <div className="flex-1">
        {page === "dashboard" && (
          <DashboardPage
            onShowCooking={() => setPage("cooking")}
          />
        )}

        {page === "scanner" && (
          <ScannerPage onBack={() => setPage("dashboard")} />
        )}

        {page === "cooking" && (
          <CookingInsights onBack={() => setPage("dashboard")} />
        )}
      </div>
    </div>
  );
}
