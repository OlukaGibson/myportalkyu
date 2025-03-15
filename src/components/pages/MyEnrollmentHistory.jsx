import React, { useState } from 'react';
import { ENROLLMENT_HISTORY, SECTIONS, INVOICE_NO } from '../../constants';

const MyEnrollmentHistory = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedInvoice, setExpandedInvoice] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const toggleInvoice = (index) => {
    setExpandedInvoice(expandedInvoice === index ? null : index);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-green-500 font-bold text-lg">MY ENROLLMENT HISTORY ({ENROLLMENT_HISTORY.length})</h1>
        <button className="text-gray-600 border border-gray-600 rounded px-2 py-1 text-sm">RELOAD</button>
      </div>
      {SECTIONS.map((section, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer p-2 border rounded bg-gray-100"
            onClick={() => toggleSection(index)}
          >
            <h2 className="text-red-500 font-bold text-sm">
              {section}
            </h2>
            <span className="text-gray-600">{expandedSection === index ? '▼' : '▶'}</span>
          </div>
          {expandedSection === index && (
            <div className="p-4 border rounded mt-2 bg-white">
              {ENROLLMENT_HISTORY.filter(history => history.section === section).map((history, idx) => (
                <div key={idx} className="mb-4">
                  <div className="mb-2">
                    <h3 className="font-bold text-sm">ENROLLMENT DETAILS</h3>
                    <button className="text-blue-500 text-sm">PRINT PROOF OF ENROLLMENT</button>
                  </div>
                  <p className="text-sm">ACADEMIC YEAR: {history.academicYear}</p>
                  <p className="text-sm">SEMESTER: {history.semester}</p>
                  <p className="text-sm">STUDY YEAR: {history.year}</p>
                  <p className="text-sm">ENROLLED AS: {history.enrolledas}</p>
                  <p className="text-sm">ENROLLED BY: {history.enrolledby}</p>
                  <p className="text-sm">ENROLLMENT TOKEN: {history.enrolledtoken}</p>
                  <p className="text-sm">ENROLLED ON: {history.enrolleddate}</p>
                  <div className="mt-2">
                    <div
                      className="flex justify-between items-center cursor-pointer p-2 border rounded bg-gray-100"
                      onClick={() => toggleInvoice(`tuition-${idx}`)}
                    >
                      <span className="text-sm">Tuition Fees Invoice - {history.tutionfees.toLocaleString()}</span>
                      <span className="text-gray-600">{expandedInvoice === `tuition-${idx}` ? '▼' : '▶'}</span>
                    </div>
                    {expandedInvoice === `tuition-${idx}` && (
                      <div className="p-2 border rounded mt-2 bg-gray-100 overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr>
                              <th className="border px-4 py-2">S/N</th>
                              <th className="border px-4 py-2">INVOICE NO.</th>
                              <th className="border px-4 py-2">AMOUNT</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">{INVOICE_NO[idx]}</td>
                              <td className="border px-4 py-2">{history.tutionfees.toLocaleString()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                    <div
                      className="flex justify-between items-center cursor-pointer p-2 border rounded bg-gray-100 mt-2"
                      onClick={() => toggleInvoice(`functional-${idx}`)}
                    >
                      <span className="text-sm">Functional Fees Invoice - {history.functionalfees.toLocaleString()}</span>
                      <span className="text-gray-600">{expandedInvoice === `functional-${idx}` ? '▼' : '▶'}</span>
                    </div>
                    {expandedInvoice === `functional-${idx}` && (
                      <div className="p-2 border rounded mt-2 bg-gray-100 overflow-x-auto">
                        <table className="min-w-full bg-white">
                          <thead>
                            <tr>
                              <th className="border px-4 py-2">S/N</th>
                              <th className="border px-4 py-2">INVOICE NO.</th>
                              <th className="border px-4 py-2">AMOUNT</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border px-4 py-2">1</td>
                              <td className="border px-4 py-2">{INVOICE_NO[idx]}</td>
                              <td className="border px-4 py-2">{history.functionalfees.toLocaleString()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
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

export default MyEnrollmentHistory;