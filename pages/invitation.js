import {
  VideoWedding,
  EventDate,
  Gallery,
  CommentForm,
  SubFooter,
  Layout,
  Invitation,
} from "../components";

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
