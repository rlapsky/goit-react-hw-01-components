import styled from "styled-components";

export const TransactionHistoryStyled = styled.table`
  border: 1px solid grey;
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;
    padding: 0.5rem;
    text-align: center;
  }

  thead {
    background-color: white;
  }

  tr:nth-child(even) {
    background: green;
  }
`;
