import React from "react";
import BottomNavbar from "../bottomNavbar/BottomNavbar";
import Footer from "../footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative">
        <Header />
        <main className="w-full sm:w-[60%] pt-40 px-2 py-4 h-full  mx-auto ">
          {children}
        </main>
        <BottomNavbar />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
