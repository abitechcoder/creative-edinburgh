import React from "react";

const ContactModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50 z-50">
      <div className="bg-white w-[500px] rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contact Creative Edinburgh</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-800"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-800"
              placeholder="Enter subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message:</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-800"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg p-2 hover:bg-green-700"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
