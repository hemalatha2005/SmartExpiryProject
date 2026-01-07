import React, { useState } from "react";

export default function AddItemModal({ onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiryDate, setExpiryDate] = useState("");

  const isValid = name.trim() && expiryDate;

  const handleAdd = () => {
    if (!isValid) return;

    onAddItem({
      name: name.trim(),
      category: category.trim(),
      quantity,
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
          placeholder="Item name *"
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
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
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
            disabled={!isValid}
            onClick={handleAdd}
            className={`flex-1 rounded-lg py-2 text-white transition
              ${
                isValid
                  ? "bg-[#142D4C] hover:bg-[#5682B1]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}
