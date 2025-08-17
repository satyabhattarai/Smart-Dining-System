import React, { useState } from "react";

import axios from "axios";

export default function MenuForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    alt: "",
    waiting_time: "",
    ingredients: "",
    image: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    console.log(form);
    try {
      await axios.post("http://127.0.0.1:8000/api/menu/store", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("✅ Menu item added successfully!");
      setFormData({
        name: "",
        price: "",
        description: "",
        alt: "",
        waiting_time: "",
        ingredients: "",
        image: null,
      });
    } catch (err) {
      setMessage("❌ Error adding menu item!");
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg p-6 mx-auto mt-10 border rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Add Menu Item</h2>

      {message && <div className="mb-3 text-red-500">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="alt"
          placeholder="Alt Text"
          value={formData.alt}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="waiting_time"
          placeholder="Waiting Time (minutes)"
          value={formData.waiting_time}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}
