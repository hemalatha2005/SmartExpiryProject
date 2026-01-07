import React, { useEffect, useState } from "react";

import ItemsTable from "../components/items/ItemsTable";
import ItemDetailsPanel from "../components/items/ItemDetailsPanel";
import AddItemModal from "../components/items/AddItemModal";


export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleRemoveItem = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/api/items/${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      setItems((prev) => prev.filter((item) => item._id !== itemId));
      setSelectedItem(null);
    } catch (err) {
      console.error("Failed to delete item", err);
    }
  };

  const handleAddItem = async (itemData) => {
    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(itemData),
      });

      const savedItem = await res.json();

      setItems((prev) => [...prev, savedItem]);
      setSelectedItem(savedItem);
    } catch (err) {
      console.error("Failed to add item", err);
    }
  };


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/items", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        const data = await res.json();

        setItems(Array.isArray(data) ? data : []);
        setSelectedItem(data[0] || null);
      } catch (err) {
        console.error("Failed to fetch items", err);
        setItems([]);
      }
    };

    fetchItems();
  }, []);



  return (
    <div className="flex gap-6 p-6 bg-[#F7FAFC] min-h-full">
      {/* LEFT PANEL */}
      <ItemDetailsPanel
        item={selectedItem}
        onRemove={handleRemoveItem}
      />

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
          onAddItem={handleAddItem}
        />

      )}

    </div>
  );
}
