import React from "react";
const TransactionItem = ({ transaction }) => {
  return (
    <>
        <tr>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
    </>
  );
};

export default TransactionItem;
