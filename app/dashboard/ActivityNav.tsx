import React from 'react'

const ActivityNav = () => {
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3"
      aria-label="Pagination"
    >
      <div className="flex flex-1 justify-between">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </nav>
  );
}

export default ActivityNav
