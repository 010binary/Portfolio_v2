import React from "react";

const Footer = () => {
  return (
    <footer className=" border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white flex items-center justify-center">
      <div className="container p-12 flex justify-between">
        <span className="text-darkblues text-3xl font-bold">ALPHA</span>
        <p className="text-slate-600">
          Copyright &#169; 2024 Alpha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
