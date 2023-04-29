"use client"
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Dashboard/Header";
import ActivityTable from "../../components/Activity/ActivityTable";
import ActivityList from "../../components/Activity/ActivityList";
import {
  ScaleIcon,
} from "@heroicons/react/24/outline";
import {
  ClockIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import BucketCards from "../../components/Card/BucketCards";



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
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "History", href: "#", icon: ClockIcon, current: false },
  { name: "Balances", href: "#", icon: ScaleIcon, current: false },
  { name: "Cards", href: "#", icon: CreditCardIcon, current: false },
  { name: "Recipients", href: "#", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "#", icon: DocumentChartBarIcon, current: false },
];
const secondaryNavigation = [
  { name: "Settings", href: "#", icon: CogIcon },
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];

const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  // More items...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex flex-1 flex-col lg:pl-40">
          <main className="flex-1">
            <Header />

            <div className="py-8 bg-white">
              <div className="overflow-auto mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-lg font-medium leading-6 text-gray-900">
                  Overview
                </h2>
                <BucketCards />
              </div>

              <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
                Recent activity
              </h2>

              {/* Activity list (smallest breakpoint only) */}
              <ActivityList />
              {/* Activity table (small breakpoint and up) */}
              <ActivityTable />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
