// src/pages/CookingSuggestionsPage.js
import React, { useState } from "react";
import ExpiringItemCard from "../components/ExpiringItemCard";
import RecipeCard from "../components/RecipeCard";

export default function CookingInsights({ onShowScanner, onBack }) 
 {
  const [selectedItem, setSelectedItem] = useState(null);

  // Mock expiring items (later replace with real inventory)
  const expiringItems = [
    { name: "Milk", daysLeft: 1, status: "red" },
    { name: "Bread", daysLeft: 2, status: "yellow" },
    { name: "Paneer", daysLeft: 3, status: "yellow" },
  ];

  // Mock recipes (later replace with API response)
  const recipes = selectedItem
    ? [
        { id: 1, title: `${selectedItem} Curry`, time: "20 mins" },
        { id: 2, title: `${selectedItem} Sandwich`, time: "10 mins" },
        { id: 3, title: `${selectedItem} Stir Fry`, time: "15 mins" },
      ]
    : [];

  return (
    <div className="flex bg-[#F7FAFC] min-h-screen">


      <div className="flex-1">
      


        <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">

          {/* PAGE TITLE */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-[#213448]">
              Cook Before It’s Gone !
            </h3>
            <h6 className="text-m  mb-4 italic text-gray-500">
              Recipes designed to reduce food waste and make the most of your ingredients.
            </h6>
          </div>

          {/* EXPIRING ITEMS */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              Items Expiring Soon
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {expiringItems.map((item, i) => (
                <ExpiringItemCard
                  key={i}
                  item={item}
                  onSelect={() => setSelectedItem(item.name)}
                />
              ))}
            </div>
          </div>

          {/* RECIPES */}
          {selectedItem && (
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Recipes using <span className="text-[#234C6A]">{selectedItem}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recipes.map((r) => (
                  <RecipeCard key={r.id} recipe={r} />
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
