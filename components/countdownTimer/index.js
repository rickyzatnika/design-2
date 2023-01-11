import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CountDownTimer({ ...props }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const intervalRef = useRef();

  useEffect(() => {
    const startTimer = () => {
      const countdownDate = new Date("August 5 2023 00:00:00").getTime();
      intervalRef.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(intervalRef.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="w-full flex items-center sm:justify-evenly justify-center gap-1 h-full pt-8">
        {/* Timer Days */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className=" flex flex-col items-center "
        >
          <div className="p-3 shadow-md bg-white/60 shadow-[#cacaca] backdrop-blur rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerDays}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Hari
          </small>{" "}
        </motion.div>
        {/* Timer Hours */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" flex flex-col items-center "
        >
          <div className="p-3 bg-white/60 shadow-md shadow-[#cacaca] backdrop-blur-xl rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerHours}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Jam
          </small>{" "}
        </motion.div>
        {/* Timer Minutes */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" flex flex-col items-center "
        >
          <div className="p-3 bg-white/60 shadow-md shadow-[#cacaca] backdrop-blur-xl rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerMinutes}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Menit
          </small>
        </motion.div>
        {/* Timer Second */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className=" flex flex-col items-center "
        >
          <div className="p-3 bg-white/60 shadow-md shadow-[#cacaca] backdrop-blur-xl rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerSeconds}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Detik
          </small>
        </motion.div>
      </div>
    </>
  );
}
