import React, { useState } from "react";

export default function AddItemModal({ onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiryDate, setExpiryDate] = useState("");

  const handleAdd = () => {
    if (!name || !expiryDate) return;

    onAddItem({
      id: Date.now().toString(),
      name,
      category,
      quantity,
      importedAt: new Date().toISOString().slice(0, 10),
      expiryDate,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-96 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Add New Item</h3>

        <input
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="number"
          min="1"
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="date"
          className="w-full border rounded-lg p-2 mb-5"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border rounded-lg py-2 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="flex-1 bg-[#142D4C] text-white rounded-lg py-2 hover:bg-[#5682B1]"
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}
