import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full z-50 bg-white/20 sm:w-[60%] text-center rounded-br-full rounded-bl-full mx-auto p-1 fixed top-0 left-0 right-0 backdrop-blur-xl shadow-xl shadow-black/10">
        <div className="relative flex flex-col items-center gap-2 w-full leading-relaxed antialiased">
          <Link href="/">
            <span className="text-2xl text-orange-900 invitation tracking-widest">
              Wedding Of
            </span>
          </Link>
          <h1 className="text-3xl sm:text-3xl font-bold text-orange-900 invitation tracking-wide">
            Ridwan dan Winda
          </h1>

          <div className="flex items-center z-30 justify-between absolute left-0 -bottom-8 w-full">
            <Image
              src="/img/flower-ornamen2.png"
              alt=""
              width={75}
              height={50}
              objectFit="cover"
              objectPosition="center"
              priority
            />

            <Image
              src="/img/flower-ornamen.png"
              alt=""
              width={75}
              height={50}
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
