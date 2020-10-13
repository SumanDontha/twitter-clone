import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar />
          <input placeholder="What's happening?" type='text' />
        </div>
        <input
          className='tweetBox__imageInput'
          placeholder='Optional: Enter Image URL'
          type='text'
        />
        <Button className='tweetBox__tweetButon'> Tweet </Button>
      </form>
    </div>
  );
};

export default TweetBox;
