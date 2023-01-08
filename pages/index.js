import { Inter } from "@next/font/google";
import {
  Header,
  VideoWedding,
  Invitation,
  EventDate,
  Gallery,
} from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <VideoWedding />
        <Invitation />
        <EventDate />
        <Gallery />
      </section>
    </>
  );
}
