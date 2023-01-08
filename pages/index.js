import { Inter } from "@next/font/google";
import {
  VideoWedding,
  Invitation,
  EventDate,
  Gallery,
  CommentForm,
  SubFooter,
} from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section>
        <VideoWedding />
        <Invitation />
        <EventDate />
        <Gallery />
        <CommentForm />
        <SubFooter />
      </section>
    </>
  );
}
