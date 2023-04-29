

const Header = () => {
  return (
    <div className="shadow py-8 w-full mx-auto">
      <div className="flex mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-6xl lg:px-8">
        <div className="basis-2/5 py-6 flex-col md:flex md:items-start md:justify-around lg:border-gray-200">
          {/* Profile */}
          <div>
            <div className="flex items-center">
              <img
                className="hidden h-16 w-16 rounded-full sm:block"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                alt=""
              />
              <div>
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-full sm:hidden"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                    alt=""
                  />
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                    Hi, Emilia
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 my-3">
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
          <div className="flex justify-between w-3/4 my-3">
            <button type="button" className="btn btn-primary">
              + Add money
            </button>
            <button type="button" className="btn btn-secondary">
              - Minus money
            </button>
          </div>
        </div>
        <div className="basis-3/5">Statistics</div>
      </div>
    </div>
  );
}

export default Header
