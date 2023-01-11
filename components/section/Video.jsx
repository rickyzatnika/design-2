import { motion } from "framer-motion";

const VideoWedding = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.1, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
        className="w-full  h-full bg-white/30 backdrop-blur-xl  py-4 px-6  relative bottom-0"
      >
        <video
          loop
          autoPlay
          muted
          className="rounded-xl shadow-xl shadow-black/60 scale-110 md:scale-125 hover:shadow-md transition-all duration-300 ease-linear"
        >
          <source type="video/mp4" src="/video/video.mp4" />
        </video>
      </motion.div>
    </>
  );
};

export default VideoWedding;
