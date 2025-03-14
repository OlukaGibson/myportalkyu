import React, { useState } from 'react';
import { NAME_CAPS, COURSE, YEAR_OF_STUDY, ENROLLING_AS, HAVE_RETAKES, profile } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const EnrollmentForm = () => {
  const [formKey, setFormKey] = useState(0);

  const reloadForm = () => {
    setFormKey(formKey + 1);
  };
  return (
    <div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between mb-4">
          <button className="text-green-500">ENROLLMENT</button>
          <button className="text-gray-600">REGISTER</button>
          <button className="text-gray-600" onClick={reloadForm}>
            <FontAwesomeIcon icon={faSync} /> RELOAD
          </button>
        </div>
        <div className="mb-4">
          <h2 className="font-bold">ENROLL FOR SEMESTER II, 2024/2025</h2>
          <p>PROG: {COURSE}</p>
        </div>
        <form key={formKey}>
          <div className="mb-4">
            <label className="block mb-1">YEAR OF STUDY <span className="text-red-700">*</span></label>
            <select className="w-full p-2 border border-gray-300 rounded">
              {YEAR_OF_STUDY.map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">ENROLLING AS? <span className="text-red-700">*</span></label>
            <select className="w-full p-2 border border-gray-300 rounded">
              {ENROLLING_AS.map((status, index) => (
                <option key={index} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">HAVE RETAKES? <span className="text-red-700">*</span></label>
            <select className="w-full p-2 border border-gray-300 rounded">
              {HAVE_RETAKES.map((retake, index) => (
                <option key={index} value={retake}>{retake}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-green-700 text-white p-3 rounded hover:bg-green-800">
            ENROLL NOW
          </button>
        </form>
      </div>
    </div>
  )
}

export default EnrollmentForm
