import React from "react";
import BottomNavbar from "../bottomNavbar/BottomNavbar";
import SoundTrack from "../soundtrack";
import Footer from "../footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative w-full overflow-x-hidden">
        <Header />
        <main className="w-full md:w-[60%] pt-40 px-2 py-4 h-full  mx-auto ">
          {children}
        </main>
        <BottomNavbar />
        <SoundTrack />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
