import styled from "styled-components";

export const FriendStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid black;
  .status {
    border-radius: 50%;
    display: box;
    width: 20px;
    height: 20px;
    background-color: ${({ isOnline }) => {
      return isOnline ? "green" : "red";
    }};
  }
`;
