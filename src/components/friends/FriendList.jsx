import React from "react";
import Friend from "./Friend";
import { FriendListStyled } from "./FriendListStyled";

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled className="friend-list">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </FriendListStyled>
  );
};

export default FriendList;
