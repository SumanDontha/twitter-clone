import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              {" "}
              Suman Dontha{" "}
              <span className='post__headerSpecail'>
                <VerifiedUserIcon className='post__badge' /> @sumandontha
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>
              {" "}
              This allows us room to decorate the widget with important
              properties.
            </p>
          </div>
        </div>
        <img
          src='https://media0.giphy.com/media/lD76yTC5zxZPG/200.webp?cid=ecf05e47thzglnuf9ul2yzao1m86jzzjxmgop5bh75poi9ps&rid=200.webp'
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
