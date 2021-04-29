import React from "react";
import { TransactionHistoryStyled } from "./TransactionHistoryStyled";
import TransactionItem from "./TransactionItem";

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryStyled className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id}/>
        ))}
      </tbody>
    </TransactionHistoryStyled>
  );
};

export default TransactionHistory;
