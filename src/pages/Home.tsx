const Home = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">Welcome to TrackerApp</h1>
        <p className="mt-4 text-gray-600">Use the sidebar to navigate your financial dashboard.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Quick Summary</h2>
          <p className="mt-3 text-gray-600">Your account overview, recent activity, and payment alerts are displayed here.</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Next Steps</h2>
          <p className="mt-3 text-gray-600">Click on Financial Status or Monthly Breakdown for more details.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
