import {
  VideoWedding,
  Invitation,
  EventDate,
  Gallery,
  CommentForm,
  SubFooter,
  Layout,
} from "../components";

const Invite = () => {
  return (
    <>
      <Layout>
        <VideoWedding />
        <Invitation />
        <EventDate />
        <Gallery />
        <CommentForm />
        <SubFooter />
      </Layout>
    </>
  );
};

export default Invite;
