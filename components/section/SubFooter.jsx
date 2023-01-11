import React from "react";
import { motion } from "framer-motion";

const SubFooter = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center antialiased w-full pb-24"
      >
        <em className="text-lg font-medium text-[#555]">
          “dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya untukmu
          pasangan hidup dari jenismu sendiri, supaya kamu mendapat ketenangan
          hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
          demikian itu menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
          berfikir” <br /> (Q.S AR-RUM : 21)
        </em>
        <h4 className="invitation text-4xl pt-6 text-amber-900">
          Ridwan & Winda
        </h4>
      </motion.div>
    </>
  );
};

export default SubFooter;
