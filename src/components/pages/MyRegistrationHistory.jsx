import React, { useState } from 'react';
import { REGISTRATION_HISTORY, SECTIONS } from '../../constants';

const MyRegistrationHistory = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-green-500 font-bold text-lg">MY REGISTRATION HISTORY</h1>
        <button className="text-gray-600 border border-gray-600 rounded px-2 py-1 text-sm">RELOAD</button>
      </div>
      {SECTIONS.map((section, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer p-2 border rounded bg-gray-100"
            onClick={() => toggleSection(index)}
          >
            <h2 className="text-red-500 font-bold text-sm">
              REGISTRATION FOR {section}
            </h2>
            <span className="text-gray-600">{expandedSection === index ? '▼' : '▶'}</span>
          </div>
          {expandedSection === index && (
            <div className="p-4 border rounded mt-2 bg-white">
              {REGISTRATION_HISTORY.filter(history => history.section === section).map((history, idx) => (
                <div key={idx} className="mb-4">
                  <div className="mb-2">
                    <h3 className="font-bold text-sm">REGISTRATION DETAILS</h3>
                  </div>
                  <p className="text-sm">REGISTRATION TYPE: <span className="text-green-500">{history.registrationtype}</span></p>
                  <p className="text-sm">REGISTERED BY: {history.registeredby}</p>
                  <p className="text-sm">DATE OF REG.: {history.registrationdate}, {history.registrationtime}</p>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm">COURSE/MODULES REGISTERED</h3>
                    <div className="flex space-x-2 mb-2">
                      <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">PRINT PROOF OF REGISTRATION</button>
                      <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">PRINT EXAM PERMIT</button>
                    </div>
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">CODE</th>
                          <th className="border px-4 py-2">COURSE TITLE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {history.courses.map((course, courseIdx) => (
                          <tr key={courseIdx}>
                            <td className="border px-4 py-2">{course.code}</td>
                            <td className="border px-4 py-2">{course.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyRegistrationHistory;