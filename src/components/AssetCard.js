// src/components/AssetCard.js
import React from "react";

export default function AssetCard({ label, amount, change, bgClass }) {
  return (
    <div className={`rounded-2xl p-4 ${bgClass} text-black/90 shadow-sm transition hover:scale-[1.02]`}>
      <div className="text-xs font-medium">{label}</div>
      <div className="mt-2 text-xl font-bold">{amount}</div>
      <div className={`mt-2 text-sm ${change.startsWith("↑") ? "text-emerald-700" : "text-red-700"}`}>
        {change}
      </div>
    </div>
  );
}
