import React from 'react';

const MyIdentificationCard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded shadow flex flex-col items-center cursor-pointer">
          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z"></path>
          </svg>
          <p className="text-center font-bold">CHANGE OF PROGRAMME</p>
        </div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center cursor-pointer">
          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.042 12.042 0 0112 21.5a12.042 12.042 0 01-6.16-10.922L12 14z"></path>
          </svg>
          <p className="text-center font-bold">ADMINISTRATIVE REGISTRATION</p>
        </div>
      </div>
    </div>
  );
};

export default MyIdentificationCard;