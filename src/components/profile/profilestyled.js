import styled from "styled-components";

export const ProfileStyled = styled.div`
  border: 1px solid black;
  width: 300px;
  padding: 15px;
  img {
    width: 100%;
  }
  .description {
    text-align: center;
  }
  .stats {
    display: flex;
    justify-content: space-between;
  }
  .stats li {
    list-style: none;
  }
`;
