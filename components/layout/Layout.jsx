import React from "react";
import BottomNavbar from "../bottomNavbar/BottomNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <BottomNavbar />

      <main className="w-full sm:w-[60%] pt-52 px-6 py-4 h-full  mx-auto ">
        {children}
      </main>
    </>
  );
};

export default Layout;
