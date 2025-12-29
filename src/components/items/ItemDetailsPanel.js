import React from "react";

// calculate days left
const getDaysLeft = (expiryDate) => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  return Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
};

const getStatusInfo = (daysLeft) => {
  if (daysLeft <= 0) {
    return {
      label: "Expired",
      color: "bg-red-100 text-red-600",
      hint: "This item should not be consumed.",
    };
  }
  if (daysLeft <= 3) {
    return {
      label: "Expiring Soon",
      color: "bg-red-50 text-red-500",
      hint: "Use this item as soon as possible.",
    };
  }
  if (daysLeft <= 7) {
    return {
      label: "Use Soon",
      color: "bg-yellow-50 text-yellow-600",
      hint: "Plan to use this item within the week.",
    };
  }
  return {
    label: "Fresh",
    color: "bg-green-50 text-green-600",
    hint: "This item is safe to store.",
  };
};

export default function ItemDetailsPanel({ item }) {
  if (!item) {
    return (
      <div className="w-80 bg-white rounded-xl shadow-sm p-5 text-gray-400">
        Select an item to view details
      </div>
    );
  }

  const daysLeft = getDaysLeft(item.expiryDate);
  const status = getStatusInfo(daysLeft);

  return (
    <div className="w-80 bg-white rounded-xl shadow-sm p-5 flex flex-col
                transition-all duration-300 ease-out
                animate-[fadeIn_0.3s_ease-out]">

      {/* TITLE */}
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{item.category}</p>

      {/* STATUS */}
      <span
        className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
      >
        {status.label}
      </span>

      {/* DAYS LEFT */}
      <div className="mt-4">
        <div className="text-sm text-gray-500">Days left</div>
        <div className="text-3xl font-bold">{daysLeft}</div>
        <div className="text-xs text-gray-400 mt-1">{status.hint}</div>
      </div>

      {/* DETAILS */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Quantity</span>
          <span className="font-medium">{item.quantity}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Imported</span>
          <span className="font-medium">{item.importedAt}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Expiry Date</span>
          <span className="font-medium">{item.expiryDate}</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-auto pt-6 flex gap-3">
        <button className="flex-1 border border-red-300 text-red-500 rounded-lg py-2 hover:bg-red-50">
          Remove
        </button>
      </div>
    </div>
  );
}
