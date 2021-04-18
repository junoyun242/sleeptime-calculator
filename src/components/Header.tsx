import React from "react";

function Header() {
  return (
    <header
      className="border-b-2 border-gray-300 flex flex-col justify-center items-center py-5 bg-gray-300"
      onClick={() => window.location.reload()}
    >
      <h1 className="text-2xl">Sleeptime Calculator</h1>
    </header>
  );
}

export default Header;
