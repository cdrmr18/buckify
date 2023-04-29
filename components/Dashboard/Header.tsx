

const Header = () => {
  return (
    <div className="bg-gray-100 border-b py-8 w-full mx-auto px-6 lg:max-w-6xl lg:px-8">
      <h1 className="text-xl font-semibold my-6">Dashboard</h1>
      <div className="flex flex-col md:flex-row mx-auto max-w-6xl space-y-6">
        <div className="basis-1/2 flex-col space-y-5 md:flex md:items-start md:justify-around lg:border-gray-200">
          {/* FInance */}
          <div>
            <h2 className="mb-6 font-bold text-4xl">$50,000</h2>

            <div className="flex justify-between pr-32">
              <div className="text-xl space-y-2">
                <p className="font-light">Savings Goal</p>
                <p className="font-light">Amount needed</p>
              </div>

              <div className="text-xl font-semibold space-y-2">
                <p>$75,000</p>
                <p >$25,000</p>
              </div>
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
        <div className="basis-1/2 space-y-3">
          <div className="bg-blue-100 border border-gray-800 rounded-sm shadow-sm px-4 py-3 flex">
            <div className="basis-1/2">
              <p className="text-xl font-bold">$30,000</p>
              <p className="text-sm font-semibold">Total savings</p>
            </div>
            <div className="basis-1/2">charts</div>
          </div>

          <div className="bg-yellow-100 border border-gray-800 rounded-sm shadow-sm px-4 py-3 flex">
            <div className="basis-1/2">
              <p className="text-xl font-bold">$30,000</p>
              <p className="text-sm font-semibold">Total savings</p>
            </div>
            <div className="basis-1/2">charts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
