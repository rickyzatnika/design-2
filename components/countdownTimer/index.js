import React, { useState, useEffect, useRef } from "react";

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
        <div className=" flex flex-col items-center ">
          <div className="p-3 shadow-md shadow-[#cacaca] backdrop-blur-xl rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerDays}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Hari
          </small>{" "}
        </div>
        {/* Timer Hours */}
        <div className=" flex flex-col items-center ">
          <div className="p-3 shadow-md shadow-[#cacaca] backdrop-blur-xl rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerHours}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Jam
          </small>{" "}
        </div>
        {/* Timer Minutes */}
        <div className=" flex flex-col items-center ">
          <div className="p-3 shadow-md shadow-[#cacaca] backdrop-blur-xl rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerMinutes}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Menit
          </small>
        </div>
        {/* Timer Second */}
        <div className=" flex flex-col items-center ">
          <div className="p-3 shadow-md shadow-[#cacaca] backdrop-blur-xl rounded">
            <div className="text-3xl sm:text-7xl rounded-bl-md rounded-br-md font-bold bottom flex items-end">
              <span className="bg-gradient-to-tr from-orange-900 to-orange-100 bg-clip-text text-transparent">
                {timerSeconds}
              </span>
            </div>
          </div>
          <small className="bg-orange-900/60  w-full text-center text-[#E7E7E7] text-md sm:text-lg">
            Detik
          </small>
        </div>
      </div>
    </>
  );
}
