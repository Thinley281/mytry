import React, { useState, useEffect } from 'react';

const FinancialStatus = () => {
  // 1. Initialize state with null or 0
  const [data, setData] = useState({ income: 0, expenses: 0, savings: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2. Fetch data from your API endpoint
    const fetchFinancialData = async () => {
      try {
        const response = await fetch('/api/user/financial-summary');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFinancialData();
  }, []);

  if (loading) return <div>Loading your finances...</div>;

  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">Financial Status</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-6 border">
          <h2 className="font-semibold">Income</h2>
          <p className="mt-2 text-xl">${data.income.toLocaleString()}</p>
        </div>
        {/* Repeat for Expenses and Savings using data.expenses and data.savings */}
      </div>
    </div>
  );
};

export default FinancialStatus;