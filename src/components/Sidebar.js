// src/components/Sidebar.js
import React, { useState } from "react";
import logo from "../assets/logo2.png";

const NavItem = ({ icon, label, active, collapsed, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
      ${active ? "bg-emerald-600/10 text-emerald-600" : "text-gray-300 hover:bg-white/5"}
    `}
  >
    <div className="w-6 h-6 text-lg">{icon}</div>

    {/* Hide label when collapsed */}
    {!collapsed && (
      <div className="text-sm font-medium whitespace-nowrap">{label}</div>
    )}
  </div>
);

export default function Sidebar({ onShowScanner, onShowDashboard }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-[#142D4C] text-gray-200 min-h-screen sticky top-0 transition-all duration-300
      ${collapsed ? "w-20" : "w-72"}
    `}
    >
      <div className="px-4 py-6 relative">

        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
        >
          <span className="text-xl">{collapsed ? "⮞" : "⮜"}</span>
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-10 mt-8">
          <div className="w-10 h-10">
            <img
              src={logo}
              alt="App Logo"
              className="w-full h-full object-contain rounded-md"
            />
          </div>

          {/* Hide app name when collapsed */}
          {!collapsed && (
            <div>
              <div className="text-lg font-semibold">ChronoShelf</div>
              <div className="text-xs text-gray-400">Inventory</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <NavItem
            icon="🏠"
            label="Overview"
            collapsed={collapsed}
            onClick={onShowDashboard}
          />

          <NavItem
            icon="📸"
            label="Scanner"
            collapsed={collapsed}
            onClick={onShowScanner}
          />
        </nav>



        {/* Account Section */}
        <div className="mt-10">
          {!collapsed && (
            <div className="text-xs text-gray-400 uppercase mb-3">Account</div>
          )}

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition">
            <div className="w-8 h-8 rounded-full bg-gray-300/20 flex items-center justify-center">
              HN
            </div>

            {/* Hide user label when collapsed */}
            {!collapsed && (
              <div className="text-sm">
                <div className="font-medium">Hemalatha</div>
                <div className="text-xs text-gray-400">View profile</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
