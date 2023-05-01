import { SavingsTracker } from "./SavingsTracker"
import { EmptyTracker } from "./EmptyTracker"

const SavingsTrackerList = () => {
  const goals = [{id: 1, name: 'Car', amount: 5_000}, {id:2, name: 'House', amount: 10_000}, {id: 3, name: 'Travel', amount: 1_000}, {id: 4, name: 'Retirement', amount: 1_000_000}]
  return (
    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {goals.map((goal) => (
        <SavingsTracker key={goal.id} goal={goal} />
      ))}
      <EmptyTracker />
    </div>
  );
}

export default SavingsTrackerList
