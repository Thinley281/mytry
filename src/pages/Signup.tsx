import { useNavigate, Link } from 'react-router-dom'; // 1. Import Link
import { useState, type FormEvent } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain one uppercase letter.');
      return;
    }

    alert('Signup Successful!');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="mb-6 text-2xl font-bold text-center">Signup</h2>
        
        {error && (
          <div className="mb-4 p-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
            {error}
          </div>
        )}

        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-2 mb-4 border rounded" 
          required 
        />

        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded" 
          required 
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded" 
          required 
        />

        <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Create Account
        </button>

        {/* 2. Added Back to Login Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;