import React from "react";
import Profile from "./profile/Profile";
import user from "../data/user.js";
import FriendList from "./friends/FriendList";
import friends from "../data/friends";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../data/transactions";
import StatisticsList from "./statistic/StatisticsList";
import statistics from "../data/statistics";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <StatisticsList statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
export default App;
