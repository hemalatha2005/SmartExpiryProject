import React, { useEffect, useState } from "react";

import ItemsTable from "../components/items/ItemsTable";
import ItemDetailsPanel from "../components/items/ItemDetailsPanel";
import AddItemModal from "../components/items/AddItemModal";

/* ----------------------------------------
   HELPER: add days relative to today
---------------------------------------- */
const addDays = (days) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

/* ----------------------------------------
   DUMMY DATA (2 red, 2 yellow, 2 green)
---------------------------------------- */
const initialItems = [
  // 🔴 RED (0–3 days)
  {
    id: "1",
    name: "Milk",
    category: "Dairy",
    quantity: 1,
    importedAt: addDays(-2),
    expiryDate: addDays(1),
  },
  {
    id: "2",
    name: "Curd",
    category: "Dairy",
    quantity: 1,
    importedAt: addDays(-3),
    expiryDate: addDays(2),
  },

  // 🟡 YELLOW (4–7 days)
  {
    id: "3",
    name: "Tomato",
    category: "Vegetables",
    quantity: 4,
    importedAt: addDays(-1),
    expiryDate: addDays(5),
  },
  {
    id: "4",
    name: "Onion",
    category: "Vegetables",
    quantity: 6,
    importedAt: addDays(-1),
    expiryDate: addDays(6),
  },

  // 🟢 GREEN (8+ days)
  {
    id: "5",
    name: "Rice",
    category: "Grains",
    quantity: 1,
    importedAt: addDays(-5),
    expiryDate: addDays(20),
  },
  {
    id: "6",
    name: "Pasta",
    category: "Grains",
    quantity: 2,
    importedAt: addDays(-4),
    expiryDate: addDays(15),
  },
];

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    setItems(initialItems);
    setSelectedItem(initialItems[0]);
  }, []);

  return (
    <div className="flex gap-6 p-6 bg-[#F7FAFC] min-h-full">
      {/* LEFT PANEL */}
      <ItemDetailsPanel item={selectedItem} />

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Items</h2>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 rounded-lg bg-[#142D4C] text-white hover:bg-[#5682B1]"
          >
            + Add Item
          </button>
        </div>

        <ItemsTable
          items={items}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
        />
      </div>

      {showAddModal && (
        <AddItemModal
          onClose={() => setShowAddModal(false)}
          onAddItem={(item) => setItems([...items, item])}
        />
      )}
    </div>
  );
}
