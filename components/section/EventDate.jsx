import CountDownTimer from "../countdownTimer";
import Link from "next/link";

const EventDate = () => {
  return (
    <>
      <div id="event" className="w-full h-full pt-28 sm:pt-44">
        <h2 className="antialiased border-b pb-4 border-orange-900/40 invitation text-center text-orange-800/80 text-4xl sm:text-6xl">
          Waktu, Tempat & Acara
        </h2>
        <div className="grid grid-cols-2 pt-10 sm:pt-20 items-center">
          <div className="antialiased text-center ">
            <h3 className="invitation text-4xl sm:text-5xl italic text-orange-900/80">
              Akad Nikah
            </h3>
            <p className="pt-3 text-[#666] text-md w-4/6 mx-auto sm:text-lg backdrop-blur">
              Pukul 07.30 WIB s/d 08.00 WIB
            </p>
          </div>
          <div className="antialiased text-center">
            <h3 className="invitation text-4xl sm:text-5xl italic text-orange-900/80">
              Resepsi
            </h3>
            <p className="pt-3 text-[#666] text-md w-4/6 mx-auto sm:text-lg backdrop-blur">
              Pukul 10.00 WIB s/d 15.00 WIB
            </p>
          </div>
        </div>
        <p className="text-center italic pt-12 sm:pt-14 text-[#555] text-md sm:text-xl tracking-widest">
          Sabtu, 5 Agustus 2023
        </p>
        <CountDownTimer />
        <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded shadow-black/10 flex flex-col leading-relaxed items-center justify-center p-6 mt-20">
          <h6 className="invitation text-4xl pb-3 text-orange-900">Tempat :</h6>
          <p className="w-5/6 text-center pb-5 text-[#555]">
            Hotel Savoy Homann, Jl. Asia Afrika No.112, Cikawao, Kec. Lengkong,
            Kota Bandung, Jawa Barat 40261
          </p>
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir/Hotel+Savoy+Homann,+Jl.+Asia+Afrika+No.112,+Cikawao,+Kec.+Lengkong,+Kota+Bandung,+Jawa+Barat+40261/@-6.9216514,107.6081602,16.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e68e7f53538a3d3:0x9d94980bcb75c0ea!2m2!1d107.610305!2d-6.9221077?hl=id"
          >
            <button className="rounded-lg bg-gradient-to-tr from-orange-800/80 to-amber-300/80 hover:from-orange-800 hover:to-amber-300 text-[#e6e6e6] hover:text-white py-2 px-6">
              Google Maps
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventDate;
