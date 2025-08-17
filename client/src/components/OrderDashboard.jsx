import React from "react";

export default function OrdersDashboard({ orders, setShowOrders }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-6 text-white bg-red-500">
          <h2 className="text-3xl font-bold">Your Orders</h2>
          <button
            onClick={() => {
              setShowOrders(false);
            }}
            className="text-2xl text-white hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-xl font-bold">Order Details</h3>
          <table className="w-full text-left border border-collapse border-gray-300 table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">Dish</th>
                <th className="px-4 py-2 border border-gray-300">Quantity</th>
                <th className="px-4 py-2 border border-gray-300">
                  Time to Cook
                </th>
                <th className="px-4 py-2 border border-gray-300">Price</th>
                <th className="px-4 py-2 border border-gray-300">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((orderItem) => (
                  <tr key={orderItem.name}>
                    <td className="px-4 py-2 border border-gray-300">
                      {orderItem.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {orderItem.quantity}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {orderItem.waiting_time || "30 mins"}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      Rs. {orderItem.price}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {(orderItem.quantity * orderItem.price).toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center mt-6">
            <button className="px-6 py-2 text-white bg-blue-500 rounded">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
