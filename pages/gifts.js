import { useState } from "react";
import { BottomNavbar } from "../components";
import Image from "next/legacy/image";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const variants = {
  closed: { opacity: 0.5 },
  open: { opacity: 1, scale: 0.9 },
};

const Gifts = () => {
  const [copyText, setCopyText] = useState(true);
  const [active, inActive] = useState("qr-bri");
  const [show, setShow] = useState(true);

  const showBri = () => {
    inActive("qr-bri");
    if (inActive !== "qr-bri") {
      setShow(true);
    }
    return () => {
      setShow(false);
    };
  };
  const showBca = () => {
    inActive("qr-bca");
    if (inActive !== "qr-bri") {
      setShow(false);
    }
    return () => {
      setShow(true);
    };
  };

  const briClick = () => {
    setCopyText(false);

    setTimeout(() => {
      setCopyText(true);
      Swal.fire({
        title: "Copied Successfully",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: true,
        showClass: {
          popup: "animate__animated animate__zoomIn",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }, 700);

    navigator.clipboard.writeText("5221843031162717");
    return;
  };
  const bcaClick = () => {
    setCopyText(false);
    setTimeout(() => {
      Swal.fire({
        title: "Copied Successfully",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        showCloseButton: true,
        showClass: {
          popup: "animate__animated animate__zoomIn",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      setCopyText(true);
    }, 500);

    navigator.clipboard.writeText("7772282331");
    return;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0.1, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-gradient-to-br to-amber-400/20 via-white from-purple-400/30 backdrop-blur-sm h-screen flex flex-col items-center justify-center "
      >
        <div className=" w-5/6 sm:w-4/6 bg-white/60 shadow-2xl shadow-amber-500/10  py-10 sm:py-20 rounded-3xl">
          <div className="flex items-center justify-center gap-4 mb-5">
            <button
              onClick={showBri}
              className={`${
                active === "qr-bri"
                  ? "rounded-full bg-[#161616] hover:bg-none hover:border hover:border-[#161616]  py-1 px-6 text-[#e6e6e6]"
                  : "border border-[#161616] rounded-full  py-1 px-6"
              }`}
            >
              BRI
            </button>
            <button
              onClick={showBca}
              className={`${
                active === "qr-bca"
                  ? "rounded-full bg-[#161616] hover:bg-none hover:border hover:border-[#161616]  py-1 px-6 text-[#e6e6e6]"
                  : "border border-[#161616] rounded-full  py-1 px-6"
              }`}
            >
              BCA
            </button>
          </div>
          {active === "qr-bri" && (
            <div className="w-full flex gap-2 flex-col items-center">
              <motion.div
                animate={show ? "open" : "closed"}
                variants={variants}
                className="w-4/6 sm:w-2/6 bg-white pt-6 pb-2 mb-4 text-center "
              >
                <Image
                  src="/img/qr-bri.png"
                  alt="qr-code"
                  width={75}
                  height={50}
                  objectFit="cover"
                  objectPosition="center"
                  layout="responsive"
                  priority
                />
                <p className="text-sm text-center pt-2 text-[#444]">BRI QRIS</p>
                <small className="italic text-center text-[#666]">
                  Ridwan Kurniawan
                </small>
              </motion.div>
              <p className="italic">Or</p>
              <button
                onClick={briClick}
                className="py-1 px-6 border rounded-full hover:bg-[#161616] hover:text-[#e6e6e6] border-[#161616]"
              >
                {copyText ? <p>Salin No.Rekening</p> : <p>loading...</p>}
              </button>
            </div>
          )}
          {active === "qr-bca" && (
            <div className="w-full flex gap-2 flex-col items-center">
              <motion.div
                animate={show ? "closed" : "open"}
                variants={variants}
                className="w-4/6 sm:w-2/6 bg-white pt-6 pb-2 mb-4 text-center"
              >
                <Image
                  src="/img/qr-bca.png"
                  alt="qr-code"
                  width={75}
                  height={50}
                  objectFit="cover"
                  objectPosition="center"
                  layout="responsive"
                  priority
                />
                <p className="text-sm text-center pt-2 text-[#444]">BCA QRIS</p>
                <small className="italic text-center text-[#666]">
                  Winda Margaretha
                </small>
              </motion.div>
              <p className="italic">Or</p>
              <button
                onClick={bcaClick}
                className="py-1 px-6 border rounded-full hover:bg-[#161616] hover:text-[#e6e6e6] border-[#161616]"
              >
                {copyText ? <p>Salin No.Rekening</p> : <p>loading...</p>}
              </button>
            </div>
          )}
        </div>
      </motion.div>
      <BottomNavbar />
    </>
  );
};

export default Gifts;
