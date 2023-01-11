import {
  VideoWedding,
  EventDate,
  Gallery,
  CommentForm,
  SubFooter,
} from "../components";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout/Layout"));
const Invitation = dynamic(() => import("../components/section/Invitation"));

const Invite = ({ posts }) => {
  return (
    <>
      <Layout>
        <VideoWedding />
        <Invitation />
        <EventDate />
        <Gallery />
        <CommentForm posts={posts} />
        <SubFooter />
      </Layout>
    </>
  );
};

export default Invite;

export async function getServerSideProps() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCTION_GET}/api/hadeuh`
  );
  const posts = await req.json();
  return {
    props: {
      posts,
    },
  };
}
