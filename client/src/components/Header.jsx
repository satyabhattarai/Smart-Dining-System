import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen">
      {/* Top bar */}
      <div className="flex bg-[#c74040] w-full h-[35px] items-center gap-8 px-8 drop-shadow-md text-white">
        <span>7:30 AM to 9:30 PM</span>
        <span>+977 9847039601</span>
      </div>

      {/* Navigation */}
      <nav className="sticky z-50 top-0 flex justify-between items-center h-[119px] drop-shadow-xl font-bold bg-[#FFF8EE] px-32">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img
            className="px-8"
            src="https://picsum.photos/100/50?random=1"
            alt="logo"
          />
          <div className="uppercase">Hotel California</div>
        </div>

        {/* Menu Items */}
        <ul className="flex gap-8 uppercase">
          <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
            <a href="/">About Us</a>
          </li>
          <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
            <a href="/">Contact Us</a>
          </li>
          <li className="border-b-2 border-transparent hover:border-[#CC3333] transition-all duration-100 ease-in-out p-2">
            <a href="/reservation">Reservation</a>
          </li>
        </ul>

        {/* Static User Section */}
        <div className="flex gap-8 mr-8">
          <div className="flex items-center justify-center gap-5">
            <button
              className="animated-button"
              onClick={() => {
                window.location.href = "/client";
              }}
            >
              John Doe
            </button>
            <div
              className="cursor-pointer hover:text-red-500"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Log Out
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
