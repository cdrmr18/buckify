
export const SavingsTracker = ({goal}) => {
  const { id, name, amount } = goal;
  return (
    <div className="border px-6 py-4">
      <h2 className="font-bold text-lg mb-3">{name} savings</h2>
      <div className="flex justify-between mb-1">
        <p className="text-md font-extralight">Total: ${amount - 400}</p>
        <p>Needed: ${amount - (amount - 400)}</p>
      </div>
      <div className="w-full bg-blue-100">
        <div className="bg-black w-3/4 h-3"></div>
      </div>
    </div>
  );
}
