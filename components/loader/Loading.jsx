import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath, router.events]);

  return (
    loading && (
      <div className="relative w-full h-screen z-[9999999] transition-all items-center justify-center duration-200 ease-linear grid grid-cols-12 bottom-0 left-0 ">
        {/* <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl w-full h-screen flex items-center justify-center absolute left-0 top-0 right-0 text-center invitation text-amber-900"
        >
          Terima Kasih Atas Perhatiannya
        </motion.h1> */}
        <motion.div
          initial={{ height: "100%" }}
          whileInView={{ height: "0" }}
          transition={{ duration: 2, delay: 0.1 }}
          className="col-span-6 bg-amber-800/80   w-full  absolute left-0 top-0 "
        ></motion.div>
        <motion.div
          initial={{ height: "100%" }}
          whileInView={{ height: "0" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="col-span-6 bg-amber-400/50  w-full h-full absolute bottom-0 right-0"
        ></motion.div>
      </div>
    )
  );
}

export default Loading;
