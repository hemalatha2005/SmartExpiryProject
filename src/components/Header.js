// src/components/Header.js
import React from "react";

export default function Header({ onShowScanner }) {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold text-emerald-600">ChronoShelf</div>
          <div className="text-sm text-gray-500">AI Food Expiry Tracker</div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onShowScanner}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm text-sm transition"
          >
            Open Scanner
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium">Hemalatha</div>
              <div className="text-xs text-gray-500">Student · Bangalore</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm">HN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
