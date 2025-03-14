import React from 'react';

const ServiceHistory = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-black font-bold text-lg">CHANGE OF PROGRAMME</h1>
        <button className="text-gray-600 border border-gray-600 rounded px-2 py-1 text-sm">RELOAD</button>
      </div>
      {/* <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
        No provisional results found
      </div> */}
      <div className="text-center">
        <img src="path/to/your/image.png" alt="No Results" className="h-32 w-32 mx-auto mb-4" />
        <p className="text-red-700 font-bold">YOU HAVE NO SERVICE HISTORY</p>
      </div>
    </div>
  );
};

export default ServiceHistory;