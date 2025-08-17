import React, { useState } from "react";

export default function MenuOverview({
  overview,
  setOverview,
  menu,
  setOrders,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert("Quantity must be at least 1.");
      return;
    }

    setOrders((prev) => [
      ...prev,
      {
        name: menu.name,
        quantity: quantity,
        price: menu.price,
        desc: menu.desc,
      },
    ]);
    alert("Item added to cart!");
    setOverview(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/50">
      <div className="w-1/2 bg-white rounded-lg shadow-lg ">
        <div className="flex justify-end p-4">
          <button
            className="text-xl font-bold text-red-500 hover:text-red-700"
            onClick={() => setOverview(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 px-2 py-6 text-center">
          <div className="h-[600px] w-full">
            <img
              src={menu.image}
              alt="Menu Item"
              className="object-cover w-full h-full max-w-full max-h-full rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold">{menu.name}</h2>
          <p className="text-gray-600">{menu.desc}</p>
          <p className="text-xl font-semibold text-red-500">Rs. {menu.price}</p>
          <p className="text-sm text-gray-500">Category: {menu.category}</p>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="px-4 py-2 text-lg font-semibold text-gray-700 border rounded-lg">
              {quantity}
            </span>
            <button
              className="px-3 py-1 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button
            className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
