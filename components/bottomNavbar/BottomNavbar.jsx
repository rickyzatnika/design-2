import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineGift,
  AiOutlineRedEnvelope,
} from "react-icons/ai";
import { RiCalendarEventLine } from "react-icons/ri";
import { TfiGallery } from "react-icons/tfi";

const BottomNavbar = () => {
  const [show, setShow] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (typeof window !== "undefined") {
        if (scrollY > navbarVisible) {
          setShow(false);
        } else {
          setShow(true);
        }
      }
      setNavbarVisible(scrollY);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <>
      <nav
        className={` z-50 fixed bottom-0 left-0 right-0 backdrop-blur rounded-xl w-[90%] sm:w-[55%] shadow-lg shadow-black/40 flex items-center justify-center mx-auto mb-3 transition-all duration-500 delay-75 ease-linear p-2 bg-gradient-to-tr from-orange-800/70 to-amber-200
          ${
            show
              ? "bottom-0 "
              : "z-50 fixed left-0 -bottom-40 right-0 backdrop-blur rounded-xl w-[90%] sm:w-[55%] shadow-lg shadow-black/40 flex items-center justify-center mx-auto mb-3 opacity-0 transition-all duration-500  delay-100 ease-linear p-2  bg-gradient-to-tr from-amber-200 to-orange-800/70 "
          }`}
      >
        <ul className="antialiased mx-auto grid grid-cols-5 text-center items-center justify-center w-full ">
          <Link href="/" className="block " passHref>
            <li className="mx-auto delay-200 hover:delay-75  right-0 flex flex-col items-center justify-center  transition-all duration-100 rounded-md ease-linear text-white hover:bg-white/90 md:hover:bg-white/50 text-xs hover:text-orange-900/50 font-semibold py-1 px-4 gap-1 ">
              <AiOutlineHome size={22} />
              Home
            </li>
          </Link>
          <Link
            href="https://wedding-second.vercel.app/#event"
            className="block"
            scroll={false}
          >
            <li className="mx-auto delay-200 hover:delay-75  right-0 flex flex-col items-center justify-center transition-all duration-100 rounded-md ease-linear text-white hover:bg-white/90 md:hover:bg-white/50 text-xs hover:text-orange-900/50 font-semibold py-1 px-4 gap-1 ">
              <RiCalendarEventLine size={22} />
              Event
            </li>
          </Link>
          <Link
            href="https://wedding-second.vercel.app/#gallery"
            className="block"
            scroll={false}
          >
            <li className="mx-auto delay-200 hover:delay-75  right-0 flex flex-col items-center justify-center transition-all duration-100 rounded-md ease-linear text-white hover:bg-white/90 md:hover:bg-white/50 text-xs hover:text-orange-900/50 font-semibold py-1 px-4 gap-1 ">
              <TfiGallery size={22} />
              Gallery
            </li>
          </Link>
          <Link
            href="https://wedding-second.vercel.app/#wish"
            className="block"
            scroll={false}
          >
            <li className="mx-auto delay-200 hover:delay-75  right-0 flex flex-col items-center justify-center transition-all duration-100 rounded-md ease-linear text-white hover:bg-white/90 md:hover:bg-white/50 text-xs hover:text-orange-900/50 font-semibold py-1 px-4 gap-1 ">
              <AiOutlineRedEnvelope size={22} />
              Wishes
            </li>
          </Link>
          <Link href="gifts" className="block" passHref>
            <li className="mx-auto delay-200 hover:delay-75  right-0 flex flex-col items-center justify-center transition-all duration-100 rounded-md ease-linear text-white hover:bg-white/90 md:hover:bg-white/50 text-xs hover:text-orange-900/50 font-semibold py-1 px-4 gap-1 ">
              <AiOutlineGift size={22} />
              Gifts
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default BottomNavbar;
