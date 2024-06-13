import React from 'react';

const Footer = ({ openContactModal }) => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Christopher Thapelo Tshoma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
