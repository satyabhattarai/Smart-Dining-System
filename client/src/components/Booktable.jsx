import React from "react";

const Booktable = ({ props }) => {
  return (
    <form className="flex bg-[#f9f5f0] w-1/2 mx-auto p-8 shadow-2xl rounded-lg mt-8">
      {/* Left side */}
      <div className="flex flex-col w-1/2 gap-8 p-4">
        <div>
          <p className="text-2xl font-bold text-gray-800">Hotel California</p>
          <p className="pt-4 text-justify text-gray-700 text-md">
            Reservations in our restaurant are available up to 30 days in
            advance for parties up to 8 guests. Guests up to 4 or fewer can also
            book online or through phone.
          </p>
        </div>
        <p className="text-xl font-bold text-gray-800">Book Now</p>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Full Name"
            value="John Doe"
            disabled
          />
          <input
            type="text"
            className="p-2 border border-gray-400 rounded"
            placeholder="Phone Number"
            value="9876543210"
            disabled
          />
          <input
            type="text"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Address"
            value="Kathmandu, Nepal"
            disabled
          />
          <input
            type="number"
            className="w-full p-2 border border-gray-400 rounded"
            placeholder="Family Size"
            value="4"
            disabled
          />
          <label>
            Table :
            <input
              value="props bata ako value"
              disabled
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>

          <label>
            Date :
            <input
              type="date"
              value="props bata aako value"
              disabled
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label>
            Start Time :
            <input
              type="time"
              value="props bata aako value"
              disabled
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label>
            End Time :
            <input
              type="time"
              value="props bata aako value"
              disabled
              className="w-full p-2 border border-gray-400 rounded"
            />
          </label>
          <label htmlFor="long-text">
            Tell us more (optional) :
            <textarea
              id="long-text"
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              value="Looking forward to my reservation!"
              disabled
            />
          </label>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 border-l-4 border-red-500 border-dashed"></div>

      {/* Right side */}
      <div className="flex flex-col w-1/2 gap-8 p-4">
        <div className="text-xl font-bold text-gray-800">Hours</div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xl font-semibold text-gray-700">Breakfast</p>
            <p className="text-lg font-medium text-red-600">
              Monday - Friday: 7:30 am - 10:00 am
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">Lunch</p>
            <p className="text-lg font-medium text-red-600">
              Monday - Friday: 12:00 pm - 2:00 pm
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-700">Dinner</p>
            <p className="text-lg font-medium text-red-600">
              Sunday - Wednesday: 5:30 pm - 10:00 pm
            </p>
            <p className="text-lg font-medium text-red-600">
              Thursday - Saturday: 5:30 pm - 10:30 pm
            </p>
          </div>
        </div>
        <button className="p-4 font-bold text-white bg-red-500 rounded hover:bg-red-700">
          Reserve Now
        </button>
      </div>
    </form>
  );
};

export default Booktable;
