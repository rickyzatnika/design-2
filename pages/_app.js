import "../styles/globals.css";
import "animate.css";
import { Canvas, Loading } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Canvas />
      <Loading />
      <Component {...pageProps} />
    </>
  );
}
