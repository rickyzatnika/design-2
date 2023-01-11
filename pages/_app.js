import "../styles/globals.css";
import "animate.css";
import { Canvas, Loading } from "../components";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Canvas /> */}
      <AnimatePresence mode="wait">
        <Loading />
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
