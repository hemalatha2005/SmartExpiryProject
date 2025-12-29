// src/components/Sidebar.js
import React from "react";
import logo from "../assets/logo2.png";

const NavItem = ({ icon, label, collapsed, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
               text-gray-300 hover:bg-white/5"
  >
    <div className="w-6 h-6 text-lg">{icon}</div>
    {!collapsed && (
      <div className="text-sm font-medium whitespace-nowrap">{label}</div>
    )}
  </div>
);

export default function Sidebar({
  onShowScanner,
  onShowDashboard,
  onShowItems,
  collapsed,
  onToggleSidebar
}) {
  return (
    <aside
      className={`bg-[#142D4C] text-gray-200 min-h-screen sticky top-0
              transition-[width] duration-500 ease-in-out
              ${collapsed ? "w-16" : "w-64"}`}
    >

      <div className="px-4 py-4 relative">

        {/* ☰ TOGGLE */}
        <button
          onClick={onToggleSidebar}
          className="absolute top-4 left-4 text-2xl text-gray-300 hover:text-white transition"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        {/* LOGO */}
        <div className="flex items-center gap-3 px-4 py-3 mb-6 mt-12">
          <div className="w-8 h-8">
            <img
              src={logo}
              alt="App Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {!collapsed && (
            <div>
              <div className="text-lg font-semibold">ChronoShelf</div>
              <div className="text-xs text-gray-400">Inventory</div>
            </div>
          )}
        </div>

        {/* NAV */}
        <nav className="space-y-2">
          <NavItem
            icon="🏠"
            label="Overview"
            collapsed={collapsed}
            onClick={onShowDashboard}
          />

          <NavItem
            icon="📦"
            label="Items"
            collapsed={collapsed}
            onClick={onShowItems}
          />

          <NavItem
            icon="📸"
            label="Scanner"
            collapsed={collapsed}
            onClick={onShowScanner}
          />
        </nav>

        {/* ACCOUNT */}
        <div className="mt-10">
          {!collapsed && (
            <div className="text-xs text-gray-400 uppercase mb-3">
              Account
            </div>
          )}

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition">
            <div className="w-8 h-8 rounded-full bg-gray-300/20 flex items-center justify-center">
              HN
            </div>

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
