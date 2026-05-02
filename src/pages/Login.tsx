// pages/Login.tsx
import { useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';

const Login = () => {
  const navigate = useNavigate();
  
  // State to track input values
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // 1. Strict Validation: User ID must be digits ONLY (no strings/letters)
    const isOnlyNumbers = /^\d+$/.test(userId);
    
    // 2. Password Validation: 8+ chars and at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
    const isLongEnough = password.length >= 8;

    if (!isOnlyNumbers) {
      alert("User ID must contain numbers only (no letters or symbols allowed).");
      return;
    }

    if (!isLongEnough || !hasUppercase) {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter.");
      return;
    }

    // If validations pass, show success and move to the dashboard
    alert("Login Successful!");
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <form 
        onSubmit={handleLogin} 
        className="p-8 bg-white rounded-xl shadow-lg w-full max-w-md border border-gray-200"
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-slate-800">Login</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
            <input 
              type="text" 
              placeholder="Enter numeric ID only" 
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Min. 8 chars, 1 uppercase" 
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 mt-4 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-md"
          >
            Login
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <button 
              type="button"
              onClick={() => navigate('/signup')}
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;