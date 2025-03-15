import React, { useState } from 'react';
import { FaTimes, FaFileAlt, FaMoneyCheckAlt, FaUserGraduate, FaDollarSign, FaBook, FaCog, FaUser, FaCalendarAlt, FaClipboardList, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NAME_CAPS, STUDENT_NUMBER, profile } from '../../constants';
import Logo from './logo.png'; // Import the logo image

const Sidebar = ({ isOpen, toggleSidebar, setActiveForm }) => {
  const [isProgrammeOpen, setIsProgrammeOpen] = useState(false);
  const [isProgrammeOpen1, setIsProgrammeOpen1] = useState(false);
  const [isProgrammeOpen2, setIsProgrammeOpen2] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleProgramme = () => {
    setIsProgrammeOpen(!isProgrammeOpen);
  };

  const toggleProgramme1 = () => {
    setIsProgrammeOpen1(!isProgrammeOpen1);
  };

  const toggleProgramme2 = () => {
    setIsProgrammeOpen2(!isProgrammeOpen2);
  };

  const handleItemClick = (form) => {
    setActiveForm(form);
    setActiveItem(form);
    toggleSidebar();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-y-0 left-0 w-80 bg-white shadow-lg p-4 overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={Logo} alt="Kyambogo University Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-blue-500 font-bold">KYAMBOGO UNIVERSITY</h2>
          </div>
          <button onClick={toggleSidebar} className="text-gray-600">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="text-center mb-4">
          <div className="mt-2 bg-gray-700 text-white p-2 rounded-lg">
            <img src={profile} alt="User Avatar" className="h-32 w-32 rounded-lg mx-auto" />
            <p className="mt-2 font-bold">{NAME_CAPS}</p>
            <p>STUDENT NO.: {STUDENT_NUMBER}</p>
          </div>
        </div>
        <ul className="space-y-4">
          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'generatePRN' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleItemClick('generatePRN')}
          >
            <FaFileAlt className="mr-2" /> 01 GENERATE PRN
          </li>
          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'financeClearance' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleItemClick('financeClearance')}
          >
            <FaMoneyCheckAlt className="mr-2" /> FINANCE CLEARANCE
          </li>

          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${isProgrammeOpen1 ? 'bg-gray-200' : ''}`}
            onClick={toggleProgramme1}
          >
            <FaBook className="mr-2" /> ENROLLMENT & REGISTRATION {isProgrammeOpen1 ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
          </li>
          {isProgrammeOpen1 && (
            <ul className="pl-8 space-y-2">
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'enrollment' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('enrollment')}
              >
                <FaClipboardList className="mr-2" /> Enroll or Register
              </li>
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'enrollmenthistory' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('enrollmenthistory')}
              >
                <FaClipboardList className="mr-2" /> Enrollment History
              </li>
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'registrationhistory' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('registrationhistory')}
              >
                <FaClipboardList className="mr-2" /> Registration History
              </li>
            </ul>
          )}

          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'payments' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleItemClick('payments')}
          >
            <FaDollarSign className="mr-2" /> PAYMENTS
          </li>

          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${isProgrammeOpen ? 'bg-gray-200' : ''}`}
            onClick={toggleProgramme}
          >
            <FaBook className="mr-2" /> MY PROGRAMME {isProgrammeOpen ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
          </li>
          {isProgrammeOpen && (
            <ul className="pl-8 space-y-2">
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'myResults' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('myResults')}
              >
                <FaClipboardList className="mr-2" /> My Results
              </li>
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'myProvisionalResults' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('myProvisionalResults')}
              >
                <FaClipboardList className="mr-2" /> My Provisional Results
              </li>
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'teachingTimetable' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('teachingTimetable')}
              >
                <FaClipboardList className="mr-2" /> Teaching TimeTable
              </li>
            </ul>
          )}

          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${isProgrammeOpen2 ? 'bg-gray-200' : ''}`}
            onClick={toggleProgramme2}
          >
            <FaBook className="mr-2" />SERVICES {isProgrammeOpen2 ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
          </li>
          {isProgrammeOpen2 && (
            <ul className="pl-8 space-y-2">
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'applyforservices' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('applyforservices')}
              >
                <FaClipboardList className="mr-2" /> APPLY FOR SERVICES
              </li>
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'servicehistory' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('servicehistory')}
              >
                <FaClipboardList className="mr-2" /> SERVICE HISTORY
              </li>
              <li
                className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'newidcards' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => handleItemClick('newidcards')}
              >
                <FaClipboardList className="mr-2" /> NEW ID CARDS
              </li>
            </ul>
          )}

          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'bioData' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleItemClick('bioData')}
          >
            <FaUser className="mr-2" /> BIO DATA
          </li>
          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'academicCalendar' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleItemClick('academicCalendar')}
          >
            <FaCalendarAlt className="mr-2" /> ACADEMIC CALENDAR
          </li>
          <li
            className={`text-gray-800 font-bold flex items-center cursor-pointer p-2 rounded ${activeItem === 'evaluationSurveys' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleItemClick('evaluationSurveys')}
          >
            <FaClipboardList className="mr-2" /> EVALUATION SURVEYS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;