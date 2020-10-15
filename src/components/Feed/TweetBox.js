import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Suman Dontha",
      userName: "donthasuman",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          placeholder='Optional: Enter Image URL'
          type='text'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButon'>
          {" "}
          Tweet{" "}
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
