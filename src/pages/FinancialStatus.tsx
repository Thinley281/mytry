import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // Make sure this path is correct

const FinancialStatus = () => {
  // 1. Setup State to hold real data
  const [data, setData] = useState({ income: 0, expenses: 0, savings: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFinances = async () => {
      try {
        setLoading(true);

        // 2. Get the currently logged-in user
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
          // 3. Fetch data from Supabase for this specific user
          const { data: financeData, error: dbError } = await supabase
            .from('finances')
            .select('income, expenses, savings')
            .eq('user_id', user.id)
            .single(); // Get one row

          if (dbError) throw dbError;
          if (financeData) setData(financeData);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFinances();
  }, []);

  if (loading) return <div className="p-8 text-center text-gray-500">Updating your balance...</div>;

  return (
    <div className="rounded-xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">Financial Status</h1>
      <p className="mt-4 text-gray-600">This page shows your current financial health from your account.</p>
      
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-6 border border-gray-100">
          <h2 className="font-semibold text-gray-700">Income</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">
            ${data.income.toLocaleString()}
          </p>
        </div>
        
        <div className="rounded-xl bg-slate-50 p-6 border border-gray-100">
          <h2 className="font-semibold text-gray-700">Expenses</h2>
          <p className="mt-2 text-2xl font-bold text-red-600">
            ${data.expenses.toLocaleString()}
          </p>
        </div>
        
        <div className="rounded-xl bg-slate-50 p-6 border border-gray-100">
          <h2 className="font-semibold text-gray-700">Savings</h2>
          <p className="mt-2 text-2xl font-bold text-blue-600">
            ${data.savings.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialStatus;