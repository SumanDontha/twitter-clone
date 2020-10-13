import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2> Home </h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Tweet Posts */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
