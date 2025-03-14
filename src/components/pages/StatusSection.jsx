import React from 'react';
import { NAME_CAPS, COURSE, profile } from '../../constants';

const StatusSection = ({ toggleSidebar }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded shadow mb-4">
        <button className="text-gray-600" onClick={toggleSidebar}>☰ MENU</button>
        <div className="flex items-center">
          <img src={profile} alt="User Avatar" className="h-8 w-8 rounded-full mr-2" />
          <span>Hi,<span className="text-blue-400"> {NAME_CAPS}</span></span>
        </div>
      </div>

      {/* Status Section */}
      <div className="bg-white p-4 rounded shadow mb-2">
        <div className="mb-2">
          <span className="font-bold text-blue-400">PROGRAMME:</span> {COURSE} <button className="bg-green-700 text-white rounded px-2 py-1">ACTIVE</button>
        </div>
        <div className="mb-2">
          <span className="font-bold text-blue-400">ACADEMIC STATUS:</span> <button className="text-orange-600 bg-orange-100 rounded px-2 py-1">NORMAL PROGRESS</button>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-2 overflow-x-auto">
        <div className="flex space-x-4">
          <div className="bg-gray-100 p-4 rounded shadow min-w-[120px]">
            <span className="font-bold">Current yr. 2024/2025</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow min-w-[120px]">
            <span className="font-bold">Current sem. SEMESTER II</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow min-w-[120px]">
            <span className="font-bold">Enrolled</span> <span className="text-red-500">NO</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow min-w-[120px]">
            <span className="font-bold">Registered</span> <span className="text-red-500">NO</span>
          </div>
        </div>
        <div className="mb-2 flex justify-between items-center">
          <span className="font-bold">TOTAL FEES BAL DUE:</span> <span className="text-red-500">0/=</span>
        </div>
        <div className="bg-blue-900 text-white rounded p-2 flex justify-between items-center">
          <span className="font-bold">BALANCE ON ACCOUNT:</span> <span>0/=</span>
        </div>
      </div>
    </div>
  );
};

export default StatusSection;