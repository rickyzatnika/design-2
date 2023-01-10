import Link from "next/link";
import Image from "next/legacy/image";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-between py-10 sm:py-24 relative">
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
        <div className="antialiase bg-gradient-to-tr from-orange-900 to-amber-400 bg-clip-text">
          <p className="text-5xl text-center pb-3 invitation text-[#313131] tracking-widest">
            Wedding of
          </p>
          <h2 className="invitation text-5xl sm:text-8xl text-transparent p-4 font-semibold">
            Ridwan & Winda
          </h2>
        </div>
        <Link href="invitation" passHref>
          <button className="bg-gradient-to-tr shadow-lg shadow-black/20 rounded from-amber-900/90 to-amber-400/90 backdrop-blur text-[#dddcdc] hover:text-[#E6E6E6] py-2 px-6">
            Buka Undangan
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
