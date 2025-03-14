import React, { useState } from 'react';

const GeneratePRN = () => {
  const [activeTab, setActiveTab] = useState('generateNewPRN');
  const [activeOption, setActiveOption] = useState(null);
  const [amount, setAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleGeneratePRNClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <button
          className={`text-sm font-bold px-4 py-2 rounded ${activeTab === 'generateNewPRN' ? 'bg-green-100 text-green-500' : 'text-gray-600'}`}
          onClick={() => handleTabClick('generateNewPRN')}
        >
          GENERATE NEW PRN
        </button>
        <button
          className={`text-sm font-bold px-4 py-2 rounded ${activeTab === 'myPaymentRefs' ? 'bg-gray-100 text-gray-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('myPaymentRefs')}
        >
          MY PAYMENT REFs
        </button>
      </div>
      {activeTab === 'generateNewPRN' && (
        <div>
          <div className="bg-yellow-100 text-yellow-700 p-2 rounded mb-4">
            You Have No Unpaid Invoices
          </div>
          <div className="space-y-2">
            <div
              className={`p-2 border rounded cursor-pointer ${activeOption === 'payAllPending' ? 'bg-gray-100' : ''}`}
              onClick={() => handleOptionClick('payAllPending')}
            >
              GENERATE PRN TO PAY FOR ALL PENDING INVOICES
            </div>
            <div
              className={`p-2 border rounded cursor-pointer ${activeOption === 'partialPayment' ? 'bg-gray-100' : ''}`}
              onClick={() => handleOptionClick('partialPayment')}
            >
              GENERATE PRN TO MAKE PARTIAL PAYMENT ON PENDING INVOICES
            </div>
            <div
              className={`p-2 border rounded cursor-pointer ${activeOption === 'depositToAccount' ? 'bg-red-100 text-red-700' : ''}`}
              onClick={() => handleOptionClick('depositToAccount')}
            >
              GENERATE PRN TO DEPOSIT TO MY ACCOUNT
            </div>
          </div>
          {activeOption === 'depositToAccount' && (
            <div className="mt-4 p-4 border rounded">
              <label className="block text-sm font-bold mb-2" htmlFor="amount">
                * AMOUNT TO DEPOSIT
              </label>
              <input
                type="number"
                id="amount"
                className="w-full p-2 border rounded mb-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <p className="text-sm mb-4">{amount}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleGeneratePRNClick}>
                GENERATE PRN
              </button>
            </div>
          )}
        </div>
      )}
      {activeTab === 'myPaymentRefs' && (
        <div>
          {/* Content for MY PAYMENT REFs tab */}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">PAYMENT REFERENCE GENERATED SUCCESSFULLY</h2>
              <button onClick={closeModal} className="text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <p className="text-green-500 font-bold">PAYMENT REFERENCE NO.: <span className="text-black">2250011752591</span></p>
              <p className="text-green-500 font-bold">TOTAL AMOUNT TO PAY: <span className="text-black">1,123,344 UGX</span></p>
              <p className="text-gray-600">DATE OF EXPIRY: <span className="text-black">2025.04.04</span></p>
            </div>
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
              Copy this Payment Reference Number and go to your Nearest Bank to make your payments.
            </div>
            <div className="flex justify-end space-x-2">
              <button onClick={closeModal} className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Cancel</button>
              <button onClick={closeModal} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratePRN;