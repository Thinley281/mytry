import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  // State Management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    cid: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // 1. CID Validation: Exactly 13 digits, numeric only
    const cidRegex = /^\d{13}$/;
    if (!cidRegex.test(formData.cid)) {
      setError('CID Number must be exactly 13 digits.');
      return;
    }

    // 2. Password Validation: Min 8 chars, 1 uppercase (only if changing password)
    if (formData.newPassword) {
      const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(formData.newPassword)) {
        setError('New password must be at least 8 characters and include an uppercase letter.');
        return;
      }

      if (formData.newPassword !== formData.confirmPassword) {
        setError('New passwords do not match.');
        return;
      }
    }

    // Success logic
    setSuccess(true);
    alert("Profile Updated Successfully!");
  };

  // Helper to update state
  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
          {formData.firstName ? formData.firstName[0].toUpperCase() : 'U'}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
        <p className="text-gray-500 text-sm">Manage your personal information and security</p>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="mb-6 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-6 p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg">
          Profile updated successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input 
              type="text" 
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              onChange={(e) => updateField('firstName', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input 
              type="text" 
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              onChange={(e) => updateField('lastName', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input 
              type="number" 
              min="18" 
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              required 
              onChange={(e) => updateField('age', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CID Number</label>
            <input 
              type="text" 
              placeholder="13-digit ID"
              value={formData.cid}
              // Only allows numeric input
              onChange={(e) => updateField('cid', e.target.value.replace(/\D/g, ''))}
              maxLength={13}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              required 
            />
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Security</h3>
          <div className="space-y-4">
            <input 
              type="password" 
              placeholder="Current Password" 
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              onChange={(e) => updateField('currentPassword', e.target.value)}
            />
            <input 
              type="password" 
              placeholder="New Password (Min 8 chars, 1 Uppercase)" 
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              onChange={(e) => updateField('newPassword', e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Confirm New Password" 
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none" 
              onChange={(e) => updateField('confirmPassword', e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <button 
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
          >
            Save Changes
          </button>
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition duration-200"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;