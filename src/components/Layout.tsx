// components/Layout.tsx
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Left */}
      <aside className="w-64 bg-slate-800 text-white p-6">
        <h1 className="text-xl font-bold mb-10 text-blue-400">TrackerApp</h1>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/financial-status" className="hover:text-blue-300">Financial Status</Link>
          <Link to="/monthly-breakdown" className="hover:text-blue-300">Monthly Breakdown</Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Navigation - Top */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <input type="text" placeholder="Search..." className="border rounded-full px-4 py-1 w-1/3 outline-none focus:border-blue-400" />
          
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
              <img src="/api/placeholder/40/40" alt="Profile" />
            </button>
            
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                <Link to="/login" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</Link>
              </div>
            )}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
