import { PlusIcon } from "@heroicons/react/20/solid";

export const EmptyTracker = () => {
  return (
    <div className="w-full h-28 px-6 py-4 border-2 border-dashed border-gray-300 flex justify-center items-center">
      <button
        type="button"
        className="inline-flex items-center bg-gray-400 px-3 py-2 text-sm font-semibold shadow-sm"
      >
        <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
        New goal
      </button>
    </div>
  );
};
