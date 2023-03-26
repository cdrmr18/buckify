
import {
  BanknotesIcon,
} from "@heroicons/react/20/solid";

const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TransactionRow = ({ transaction }) => {
  return (
    <tr key={transaction.id} className="bg-white">
      <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
        <div className="flex">
          <a
            href={transaction.href}
            className="group inline-flex space-x-2 truncate text-sm"
          >
            <BanknotesIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <p className="truncate text-gray-500 group-hover:text-gray-900">
              {transaction.name}
            </p>
          </a>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
        <span className="font-medium text-gray-900">{transaction.amount}</span>
        {transaction.currency}
      </td>
      <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
        <span
          className={classNames(
            statusStyles[transaction.status],
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
          )}
        >
          {transaction.status}
        </span>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
        <time dateTime={transaction.datetime}>{transaction.date}</time>
      </td>
    </tr>
  );
};

export default TransactionRow
