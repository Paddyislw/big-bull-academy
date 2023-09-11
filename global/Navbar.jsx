import React from "react";

const Navbar = () => {
  return (
    <div className="layout flex justify-between h-[60px] items-center z-10 relative">
      <div>Logo</div>
      <div className="flex space-x-2">
        <p>Home</p>
        <p>Service</p>
      </div>
    </div>
  );
};

export default Navbar;
