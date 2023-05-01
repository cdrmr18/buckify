"use client";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Budget() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-full">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col lg:pl-40">
        <main className="flex-1 flex">
          <div className="w-2/6 h-screen py-8 bg-gray-100 x-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-medium leading-6 text-gray-900 mb-5">
              My buckets
            </h2>
          </div>

          <section className="w-full overflow-auto mx-auto ">
            <div className="py-8 bg-blue-100 flex justify-between items-start h-3/6 max-w-6xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-medium leading-6 text-gray-900 mb-5">
                My savings
              </h1>

              <div className="border border-black px-2 flex items-center">
                Monthly
                <ChevronDownIcon className="ml-2 w-3 h-3" />
              </div>
            </div>

            <div className="py-8 bg-white h-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-medium leading-6 text-gray-900 mb-5">
                Transactions
              </h2>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
