import React from 'react'
import TransactionRow from "./TransactionRow";
import Pagination from "./Pagination";

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

const ActivityTable = () => {
  return (
    <div className="hidden sm:block">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex flex-col">
          <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Transaction
                  </th>
                  <th
                    className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Amount
                  </th>
                  <th
                    className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                    scope="col"
                  >
                    Status
                  </th>
                  <th
                    className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <TransactionRow transaction={transaction} />
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityTable
