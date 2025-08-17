import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFF8EE] to-[#F0E3E0] w-screen ">
      {/* Navbar */}
      <nav className="sticky z-50 top-0 flex justify-between items-center h-[119px] drop-shadow-xl font-bold bg-[#FFF8EE] px-32 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <img src="https://picsum.photos/100/50?random=1" alt="logo" />
          <div className="uppercase">Hotel California</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-row justify-between w-full h-screen gap-32 px-32 overflow-hidden">
        {/* Login Form */}
        <form className="flex flex-col w-1/2 p-8 mt-32 ml-8 rounded h-1/2">
          <h1 className="text-[#2A435D] text-3xl font-bold pb-16">Login</h1>

          <label className="text-[#395471] font-semibold">
            Phone
            <input
              type="number"
              autoComplete="off"
              className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600"
            />
          </label>

          <label className="text-[#2A435D] font-semibold mt-16">
            Password
            <input
              autoComplete="off"
              type="password"
              className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600"
            />
          </label>

          <button
            type="button"
            className="w-1/2 my-16 animated-button-secondary"
          >
            Login
          </button>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="text-red-700 rounded focus:text-red-400"
              />
              <label>Remember Me</label>
            </div>
            <a href="/" className="border-b-2 border-red-500 text-md">
              Forgot Password?
            </a>
          </div>

          <p className="flex gap-2 mt-8">
            Don&apos;t have an account?&nbsp;
            <span className="border-b-2 border-red-500 text-md">
              <Link to="/register">Register Now</Link>
            </span>
          </p>
        </form>

        {/* Masonry Image Grid */}
        <div className="flex flex-row w-1/2 pb-8 mt-0">
          <div className="grid grid-cols-1 gap-4 masonry-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(10)].map((_, i) => (
              <div className="masonry-item" key={i}>
                <img
                  src={`https://picsum.photos/800/300?random=${i + 1}`}
                  alt={`Imagee ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
