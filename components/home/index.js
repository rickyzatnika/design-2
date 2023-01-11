import React from "react";
import VideoWedding from "../section/Video";
import Invitation from "../section/Invitation";
import EventDate from "../section/EventDate";
import Gallery from "../section/Gallery";
import CommentForm from "../commentForm";
import SubFooter from "../section/SubFooter";

const Home = () => {
  return (
    <>
      <VideoWedding />
      <Invitation />
      <EventDate />
      <Gallery />
      <CommentForm />
      <SubFooter />
    </>
  );
};

export default Home;
