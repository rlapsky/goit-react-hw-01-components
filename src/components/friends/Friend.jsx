import React from "react";
import { FriendStyled } from "./FriendStyled";

const Friend = ({ friend }) => {
  return (
    <FriendStyled className="item" key={friend.id} isOnline={friend.isOnline}>
      <span className="status"></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </FriendStyled>
  );
};

export default Friend;
