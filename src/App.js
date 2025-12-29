import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AddItemModal from "./components/items/AddItemModal";

import DashboardPage from "./pages/DashboardPage";
import ScannerPage from "./pages/ScannerPage";
import CookingInsights from "./pages/CookingInsights";
import ItemsPage from "./pages/ItemsPage";
import AuthPage from "./pages/AuthPage";

export default function App() {
  // AUTH STATE (PERSISTENT)
  const [page, setPage] = useState(
    localStorage.getItem("isAuthenticated") ? "dashboard" : "auth"
  );

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const openAddItemModal = () => setShowAddModal(true);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setPage("auth");
  };

  return (
    <div className="flex min-h-screen bg-[#DFFFD8]/40">
      {/* SIDEBAR (HIDDEN ON AUTH) */}
      {page !== "auth" && (
        <Sidebar
          onShowScanner={() => setPage("scanner")}
          onShowDashboard={() => setPage("dashboard")}
          onShowItems={() => setPage("items")}
          collapsed={!sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
      )}

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* HEADER (HIDDEN ON AUTH) */}
        {page !== "auth" && (
          <Header
            onShowScanner={() => setPage("scanner")}
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />
        )}

        {/* PAGE CONTENT */}
        <div key={page} className="flex-1 animate-[fadeIn_0.3s_ease-out]">
          {/* AUTH PAGE */}
          {page === "auth" && (
            <AuthPage
              onAuthSuccess={() => {
                localStorage.setItem("isAuthenticated", "true");
                setPage("dashboard");
              }}
            />
          )}

          {/* DASHBOARD */}
          {page === "dashboard" && (
            <DashboardPage
              onShowCooking={() => setPage("cooking")}
              onShowItems={() => setPage("items")}
              onAddItem={openAddItemModal}
              onLogout={handleLogout}
              onShowScanner={() => setPage("scanner")}
            />
          )}

          {/* SCANNER */}
          {page === "scanner" && (
            <ScannerPage onBack={() => setPage("dashboard")} />
          )}

          {/* COOKING */}
          {page === "cooking" && (
            <CookingInsights onBack={() => setPage("dashboard")} />
          )}

          {/* ITEMS */}
          {page === "items" && <ItemsPage />}
        </div>
      </div>

      {/* GLOBAL ADD ITEM MODAL */}
      {showAddModal && (
        <AddItemModal
          onClose={() => setShowAddModal(false)}
          onAddItem={(item) => {
            console.log("Item added:", item);
          }}
        />
      )}
    </div>
  );
}
