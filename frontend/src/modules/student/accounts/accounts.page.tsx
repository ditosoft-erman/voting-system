import { useState } from 'react';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState<'userAccount' | 'changePassword'>('userAccount');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Switch between User Account and Change Password
  const switchTab = (tab: 'userAccount' | 'changePassword') => {
    setActiveTab(tab);
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null); // Fallback to null if file is undefined
    if (file) {
      const filePreview = URL.createObjectURL(file);
      setPreview(filePreview);
    }
  };  

  return (
    <div className="flex">
      

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-blue-900 p-4 text-white">
          <h1 className="text-xl">Good Day!</h1>
        </div>

        {/* Account Tabs */}
        <div className="p-6">
          <div className="bg-white shadow-lg rounded-md p-4">
            <div className="flex justify-between">
              <div>
                <button
                  className={`px-4 py-2 ${activeTab === 'userAccount' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                  onClick={() => switchTab('userAccount')}
                >
                  User Account
                </button>
                <button
                  className={`px-4 py-2 ml-4 ${activeTab === 'changePassword' ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                  onClick={() => switchTab('changePassword')}
                >
                  Change Password
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'userAccount' && (
              <div className="mt-6">
                <h2 className="bg-blue-900 text-white py-2 px-4 rounded-t-md">Profile Account</h2>
                <div className="p-4 bg-gray-100 grid grid-cols-3 gap-8">
                  {/* Profile Form */}
                  <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold mb-2">Firstname</label>
                        <input
                          type="text"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue="John"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">Lastname</label>
                        <input
                          type="text"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue="Doe"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">M. Initial</label>
                        <input
                          type="text"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue="A"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">Suffix</label>
                        <input
                          type="text"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue=""
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">Year Level</label>
                        <input
                          type="text"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue="4"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">Sex</label>
                        <input
                          type="text"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue="Male"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">Email</label>
                        <input
                          type="email"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-2">Contact Number</label>
                        <input
                          type="tel"
                          className="border border-gray-300 p-2 rounded-md w-full"
                          defaultValue="+1234567890"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Profile Picture Upload */}
                  <div className="flex flex-col items-center justify-center">
                    {preview ? (
                      <img src={preview} alt="Profile Preview" className="rounded-full w-32 h-32 mb-4" />
                    ) : (
                      <div className="bg-gray-200 rounded-full w-32 h-32 mb-4 flex items-center justify-center">
                        <span className="text-4xl text-gray-400">👤</span>
                      </div>
                    )}
                    <input type="file" id="file" className="hidden" onChange={handleFileUpload} />
                    <label htmlFor="file" className="bg-yellow-400 px-4 py-2 text-black rounded cursor-pointer">
                      Choose File
                    </label>
                    <p className="mt-2">{selectedFile ? selectedFile.name : "No File Chosen"}</p>
                    <button className="mt-4 bg-yellow-400 px-4 py-2 text-black rounded">
                      View QR
                    </button>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="mt-6 flex justify-end">
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded">Save Changes</button>
                </div>
              </div>
            )}

            {/* Change Password Tab Content */}
            {activeTab === 'changePassword' && (
              <div className="mt-6">
                <h2 className="bg-blue-900 text-white py-2 px-4 rounded-t-md">Change Password</h2>
                <div className="p-4 bg-gray-100">
                  {/* Change Password Form */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block font-bold mb-2">Current Password</label>
                      <input
                        type="password"
                        className="border border-gray-300 p-2 rounded-md w-full"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-2">New Password</label>
                      <input
                        type="password"
                        className="border border-gray-300 p-2 rounded-md w-full"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="border border-gray-300 p-2 rounded-md w-full"
                      />
                    </div>
                  </div>

                  {/* Save Changes Button */}
                  <div className="mt-6">
                    <button className="bg-blue-900 text-white px-4 py-2 rounded">Save Changes</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
