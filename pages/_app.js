import "../styles/globals.css";
import { Canvas, Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Canvas />
      <Component {...pageProps} />
    </>
  );
}
