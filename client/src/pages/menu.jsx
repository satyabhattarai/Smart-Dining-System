import { useEffect, useState } from "react";

import MenuOverview from "../components/MenuOverview";
import OrdersDashboard from "../components/OrderDashboard";
import axios from "axios";
import { useStateContext } from "../ContextProvider";

export default function Menu() {
  const [overview, setOverview] = useState();
  const [orderItems, setOrderItems] = useState([]);
  const { orders, setShowOrders } = useStateContext();
  const [menuItems, setMenuItems] = useState();
  const categories = [
    { name: "All" },
    { name: "Breakfast" },
    { name: "Momo" },
    { name: "Pizza" },
    { name: "Burger" },
    { name: "Drinks" },
    { name: "Desserts" },
    { name: "Salads" },
    { name: "Appetizers/Starters" },
    { name: "Soups" },
    { name: "Pasta" },
    { name: "Sandwiches" },
    { name: "Wraps & Rolls" },
    { name: "Seafood" },
    { name: "Steak & Grills" },
    { name: "Sides" },
    { name: "Vegan/Vegetarian" },
    { name: "Kids Menu" },
    { name: "Combo Meals" },
  ];
  // <img src={`http://127.0.0.1:8000/storage/menu/${item.image}`} alt={item.alt} />
  const fetchdatafrommenu = async () => {
    const res = await axios.get("http://localhost:8000/api/menu");
    console.log(res.data);
    setMenuItems(res.data);
  };
  useEffect(() => {
    fetchdatafrommenu();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedMenu, setSelectedMenu] = useState();
  return (
    <div>
      {/* Banner */}
      <div className="h-[300px] w-screen">
        <img
          className="object-cover w-full h-full"
          src="https://picsum.photos/1200/300?random=3"
          alt="menu"
        />
      </div>

      {/* Intro Section */}
      <div className="flex flex-col items-center justify-between gap-8 py-8 lg:py-16 lg:flex-row">
        <div className="flex-shrink-0">
          <img src="https://picsum.photos/500/200?random=4" alt="intro" />
        </div>
        <div className="lg:max-w-[50%] text-justify max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      {/* Cleaning Alert Section */}
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex gap-8">
          <img src="https://picsum.photos/200/200?random=5" alt="" />
          <img src="https://picsum.photos/200/200?random=6" alt="" />
        </div>
        <button className="animated-button-secondary">Cleaning Alert</button>
      </div>

      {/* Menu Section */}
      <div className="text-[#c74040] text-4xl font-bold text-center py-16">
        Menu
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 pb-8 lg:gap-8 lg:pb-8 lg:p-2">
        {categories.map((cat, index) => (
          <span
            key={index}
            className={`inline-block text-xl cursor-pointer py-2 px-4 ${
              cat.name === selectedCategory ? "bg-red-100" : "bg-gray-200"
            }`}
            onClick={() => {
              setSelectedCategory(cat.name);
            }}
          >
            {cat.name}
          </span>
        ))}
      </div>

      {/* Menu Cards */}
      <div className="grid items-center justify-between grid-cols-1 gap-8 m-4 lg:grid-cols-2 md:grid-cols-1">
        {menuItems
          ?.filter((menu) => {
            if (selectedCategory === categories[0].name) {
              return true;
            } else {
              return menu.category === selectedCategory;
            }
          })
          .map((menu, index) => (
            <div
              className="card"
              key={index}
              onClick={() => {
                setOverview(true);
                setSelectedMenu(menu);
              }}
            >
              <div className="content">
                <div className="title">{menu.name}</div>
                <p className="description">{menu.desc}</p>
                <p className="price">Rs. {menu.price}</p>
                <p className="category">{menu.category}</p>
              </div>
              <div className="image-container">
                <img
                  src={`http://127.0.0.1:8000/storage/${menu.image}`}
                  alt={menu.alt}
                  className="object-cover w-full h-full food-image"
                />
              </div>
              {console.log(menu.menu_unique_id)}
            </div>
          ))}
        {overview && (
          <MenuOverview
            overview={overview}
            setOverview={setOverview}
            menu={selectedMenu}
            setOrders={setOrderItems}
          />
        )}
      </div>

      {/* Orders Button */}
      <div className="flex justify-center w-full">
        <button
          onClick={() => {
            setShowOrders(true);
          }}
          className="px-8 py-2 mt-12 text-white bg-red-500"
        >
          SEE YOUR ORDERS
        </button>
        {orders && (
          <OrdersDashboard setShowOrders={setShowOrders} orders={orderItems} />
        )}
      </div>
    </div>
  );
}
