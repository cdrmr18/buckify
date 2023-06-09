

import {
  BanknotesIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const Transaction = ({ transaction }) => {
  return (
    <li key={transaction.id}>
      <a
        href={transaction.href}
        className="block bg-white px-4 py-4 hover:bg-gray-50"
      >
        <span className="flex items-center space-x-4">
          <span className="flex flex-1 space-x-2 truncate">
            <BanknotesIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <span className="flex flex-col truncate text-sm text-gray-500">
              <span className="truncate">{transaction.name}</span>
              <span>
                <span className="font-medium text-gray-900">
                  {transaction.amount}
                </span>{" "}
                {transaction.currency}
              </span>
              <time dateTime={transaction.datetime}>{transaction.date}</time>
            </span>
          </span>
          <ChevronRightIcon
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </a>
    </li>
  );
};

export default Transaction
