import React from "react";

function Header() {
  return (
    <header className="flex flex-col justify-center items-center py-5 bg-gray-400 text-red-700">
      <h1 className="text-2xl" onClick={() => window.location.reload()}>
        Sleeptime Calculator
      </h1>
    </header>
  );
}

export default Header;
