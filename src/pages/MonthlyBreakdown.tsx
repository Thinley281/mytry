const MonthlyBreakdown = () => {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">Monthly Breakdown</h1>
      <p className="mt-4 text-gray-600">Review your expenses and income trends for this month.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-6 border">
          <h2 className="font-semibold">Top Categories</h2>
          <ul className="mt-3 list-disc pl-5 text-gray-700">
            <li>Groceries</li>
            <li>Utilities</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <div className="rounded-xl bg-slate-50 p-6 border">
          <h2 className="font-semibold">Projected Balance</h2>
          <p className="mt-3 text-xl">$2,400</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyBreakdown;
