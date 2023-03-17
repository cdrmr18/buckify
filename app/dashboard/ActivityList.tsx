import React from 'react'
import ActivityNav from "./ActivityNav";
import Transaction from "./Transaction";
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];


const ActivityList = () => {
  return (
    <div className="shadow sm:hidden">
      <ul
        role="list"
        className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
      >
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </ul>

      <ActivityNav />
    </div>
  );
}

export default ActivityList
