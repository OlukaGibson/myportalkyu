import React from 'react';

const TeachingTimetableForm = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-black font-bold text-lg">
          TEACHING TIMETABLE FOR <span className="text-blue-500">2024/2025</span>
        </h1>
        <button className="text-gray-600 border border-gray-600 rounded px-2 py-1 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582M20 20v-5h-.582M4 4l16 16M4 20l16-16"></path>
          </svg>
          RELOAD
        </button>
      </div>
      <div className="text-center">
        <img src="path/to/your/image.png" alt="No Timetable" className="h-32 w-32 mx-auto mb-4" />
        <p className="text-red-700 font-bold">NO TIMETABLE HAS BEEN CREATED</p>
      </div>
    </div>
  );
};

export default TeachingTimetableForm;