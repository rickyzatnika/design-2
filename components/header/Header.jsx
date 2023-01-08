import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full z-50 sm:w-[60%] text-center rounded-br-full rounded-bl-full mx-auto p-4 fixed top-0 left-0 right-0 backdrop-blur-xl shadow-xl shadow-black/10">
      <div className="relative flex flex-col items-center gap-2 w-full leading-relaxed antialiased">
        <span className="text-3xl text-orange-900 invitation tracking-widest">
          - Wedding Invitation-
        </span>
        <h1 className="text-3xl sm:text-3xl font-bold text-orange-900 invitation tracking-wide">
          Ridwan & Winda
        </h1>

        <div className="flex items-center justify-between absolute left-0 -bottom-8 w-full">
          <span className="">
            <Image
              src="/img/flower-ornamen.png"
              alt=""
              width={100}
              height={100}
              priority
            />
          </span>
          <span className="">
            <Image
              src="/img/flower-ornamen2.png"
              alt=""
              width={100}
              height={100}
              priority
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
