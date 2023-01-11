import Link from "next/link";
import Image from "next/legacy/image";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center sm:justify-between py-0 sm:py-24 relative">
        <div className="absolute  left-0 right-0 bottom-0 -z-50">
          <Image
            src="/img/ornamen.png"
            alt=""
            width={75}
            height={50}
            objectFit="contain"
            layout="responsive"
            priority
          />
        </div>
        <div className="antialiased text-center bg-gradient-to-tr from-orange-900 to-amber-400 bg-clip-text">
          <p className="text-3xl sm:text-5xl text-center pb-3 invitation text-[#313131c4] tracking-widest">
            - Wedding Invitation -
          </p>
          <h2 className="invitation mb-20 sm:mb-0 text-5xl sm:text-8xl text-transparent p-2 sm:p-4 font-medium">
            Ridwan & Winda
          </h2>
        </div>
        <Link href="invitation" passHref>
          <button className="bg-gradient-to-tr  shadow-lg shadow-black/20 rounded from-amber-800/90 to-amber-400/80 backdrop-blur text-[#e4e3e3] hover:text-[#E6E6E6] py-2 px-6">
            Buka Undangan
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
