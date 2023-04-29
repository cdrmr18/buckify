

const Header = () => {
  return (
    <div className="border-b py-8 w-full mx-auto px-6 lg:max-w-6xl lg:px-8">
      <h1 className="text-lg font-semibold my-4">Dashboard</h1>
      <div className="flex flex-col md:flex-row mx-auto max-w-6xl space-y-4">
        <div className="basis-1/2 flex-col space-y-5 md:flex md:items-start md:justify-around lg:border-gray-200">
          {/* FInance */}
          <div>
            <h2 className="mb-6 font-bold text-3xl">$50,000</h2>
            <div className="flex justify-between text-2xl">
              <p>$75,000</p>
              <p>Savings Goal</p>
            </div>
            <div className="mt-3 flex justify-between text-2xl">
              <p>$25,000</p>
              <p>Amount needed</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between my-3 w-full space-x-4">
            <button
              type="button"
              className="bg-gray-800 text-white px-4 py-2 rounded-sm flex-grow"
            >
              Add money
            </button>
            <button
              type="button"
              className="border border-gray-800 px-4 py-2 rounded-sm flex-grow"
            >
              Remove money
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="basis-1/2">Statistics</div>
      </div>
    </div>
  );
}

export default Header
