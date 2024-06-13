import React, { useState } from 'react';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
        Contact Me
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <button className="absolute top-2 right-2 text-gray-700 hover:text-gray-900" onClick={toggleModal}>
              <i className="fas fa-times"></i>
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
