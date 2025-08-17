import Booktable from "../components/Booktable";

const Reservation = () => {
  return (
    <div className="">
      {/* Header Image */}
      <div className="h-[300px] w-screen -mx-32">
        <img
          className="object-cover w-full h-full"
          src="Images/Food.jpg"
          alt="menu"
        />
      </div>

      {/* Description */}
      <p className="mt-16 text-xl font-semibold text-center text-gray-500">
        Directly select available table
      </p>
      <p className="pt-4 text-xl text-center text-red-800">
        If a seat is colored grey or is unclickable, it indicates that the seat
        is available, and you can click to select your desired table type. If
        the seat is colored red, it means that the seat is already reserved.
      </p>
      <p className="text-lg text-center text-gray-500">
        (Layout of hotel california)
      </p>

      {/* Tables */}
      <div className="grid justify-between grid-cols-4 gap-16 mt-16">
        {/* One Seater */}
        <div className="flex flex-col items-center gap-5 text-center ">
          <p className="mb-4 text-xl font-semibold text-gray-700">One Seater</p>
          <div className="flex gap-8">
            <span className="inline-block p-8 mb-8 text-center bg-gray-300 rounded">
              -
            </span>
            <span className="inline-block p-16 bg-gray-300">1 EX1</span>
          </div>
          <div className="flex gap-8">
            <span className="inline-block p-8 mb-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-16 bg-gray-300">1 EX2</span>
          </div>
          <div className="flex gap-8">
            <span className="inline-block p-8 mb-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-16 bg-gray-300">1 EX3</span>
          </div>
        </div>

        {/* Two Seater */}
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="mb-4 text-xl font-semibold text-gray-700">Two Seater</p>
          <span className="inline-block p-8 mx-4 bg-gray-300 rounded">-</span>
          <span className="inline-block p-16 bg-gray-300">2 EX4</span>
          <span className="inline-block p-8 mx-4 bg-gray-300 rounded">-</span>
        </div>

        {/* Four Seater */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700">
            Four Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className="inline-block p-16 bg-gray-300">4 EX5</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>

        {/* Six Seater */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700">Six Seater</p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className="inline-block p-16 bg-gray-300">6 EX6</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>

        {/* Family Seater */}
        <div className="flex flex-col items-center gap-8">
          <p className="mb-4 text-xl font-semibold text-gray-700">
            Family Seater
          </p>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
          <span className="inline-block p-16 bg-gray-300">8 EX7</span>
          <div className="flex flex-row gap-4">
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
            <span className="inline-block p-8 bg-gray-300 rounded">-</span>
          </div>
        </div>
      </div>

      {/* Check Reservation Form */}
      <div className="flex items-center justify-center py-5 bg-gray-100">
        <div className="w-1/2 p-8 bg-white border-2 border-red-500 rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            Check Reservation
          </h2>

          <form className="space-y-4">
            <label className="block font-medium text-gray-700">
              Table Number:
              <input
                type="text"
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
              />
            </label>
            <label className="block font-medium text-gray-700">
              Date:
              <input
                type="date"
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
              />
            </label>

            <label className="block font-medium text-gray-700">
              Start Time:
              <input
                type="time"
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
              />
            </label>

            <label className="block font-medium text-gray-700">
              End Time:
              <input
                type="time"
                className="w-full p-2 mt-1 border border-gray-400 rounded focus:ring-2 focus:ring-red-500"
              />
            </label>

            <button
              type="button"
              className="w-full py-2 text-white transition bg-red-600 rounded hover:bg-red-700"
            >
              Check Availability
            </button>
          </form>

          {/* Static Placeholder for Availability */}
          <div className="mt-4 font-semibold text-center text-green-600">
            ✅ Reservation is available!
          </div>

          <div className="flex justify-center mt-16">
            <button className="animated-button-secondary">
              Book Your Table Now
            </button>
          </div>
        </div>
      </div>

      {/* Static Booktable Component */}
      <Booktable
        props={[
          {
            table_number: 1,
            date: "2025-08-13",
            start_time: "12:00",
            end_time: "13:00",
          },
        ]}
      />
    </div>
  );
};

export default Reservation;
