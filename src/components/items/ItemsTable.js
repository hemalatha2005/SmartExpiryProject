import React from "react";
import ItemRow from "./ItemRow";

export default function ItemsTable({ items, selectedItem, onSelectItem }) {
  return (
    <table className="w-full text-sm">
      <thead className="border-b text-gray-500">
        <tr>
          <th className="text-left py-2">Item</th>
          <th className="text-center">Imported</th>
          <th className="text-center">Expiry</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            active={selectedItem?.id === item.id}
            onClick={() => onSelectItem(item)}
          />
        ))}
      </tbody>
    </table>
  );
}
