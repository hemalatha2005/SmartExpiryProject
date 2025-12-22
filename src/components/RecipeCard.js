// src/components/RecipeCard.js
import React from "react";

export default function RecipeCard({ recipe }) {
  return (
    <div className="rounded-xl border bg-gray-50 p-4 hover:shadow-md transition cursor-pointer">
      <div className="h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center text-gray-400">
        Recipe Image
      </div>

      <div className="font-medium">{recipe.title}</div>
      <div className="text-sm text-gray-500">{recipe.time}</div>

      <button className="mt-3 text-sm text-emerald-600 hover:underline text-[#234C6A]">
        View Recipe →
      </button>
    </div>
  );
}
