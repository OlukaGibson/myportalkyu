import React from 'react';
import { COURSES, NAME_CAPS, STUDENT_NUMBER, REGISTRATION_NUMBER, GENDER, DATE_OF_BIRTH, FACUILTY, PROGRAMME, profile, SECTIONS, SEMESTER_RESULTS } from '../../constants';

const ResultForm = () => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-green-500 font-bold text-lg">MY RESULT</h1>
        <button className="text-gray-600 border border-gray-600 rounded px-2 py-1 text-sm">RELOAD</button>
      </div>
      <div className="text-center mb-4">
        <img src={profile} alt="User Avatar" className="h-32 w-32 rounded-lg mx-auto" />
        <p className="mt-2 font-bold text-sm">{NAME_CAPS}</p>
        <p className="text-sm">STUDENT NO.: {STUDENT_NUMBER}</p>
        <p className="text-sm">REG. NO.: {REGISTRATION_NUMBER}</p>
        <p className="text-sm">GENDER: {GENDER}</p>
        <p className="text-sm">DATE OF BIRTH: {DATE_OF_BIRTH}</p>
        <p className="text-sm">FACULTY: {FACUILTY}</p>
        <p className="text-sm">PROGRAMME: {PROGRAMME}</p>
      </div>
      <div className="overflow-x-auto">
        {SECTIONS.map((section, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-bold text-sm">{section}</h2>
            <table className="min-w-full bg-white border border-gray-300 text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-2 py-1">CODE</th>
                  <th className="border border-gray-300 px-2 py-1">TITLE</th>
                  <th className="border border-gray-300 px-2 py-1">MARK</th>
                  <th className="border border-gray-300 px-2 py-1">CUs</th>
                  <th className="border border-gray-300 px-2 py-1">GRADE</th>
                  <th className="border border-gray-300 px-2 py-1">GD POINT</th>
                  <th className="border border-gray-300 px-2 py-1">REMARK</th>
                </tr>
              </thead>
              <tbody>
                {COURSES.filter(course => course.section === section).map((filteredCourse, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                    <td className="border border-gray-300 px-2 py-1">{filteredCourse.code}</td>
                    <td className="border border-gray-300 px-2 py-1">{filteredCourse.title}</td>
                    <td className="border border-gray-300 px-2 py-1">{filteredCourse.Marks}</td>
                    <td className="border border-gray-300 px-2 py-1">{filteredCourse.CU}</td>
                    <td className="border border-gray-300 px-2 py-1">{filteredCourse.grade}</td>
                    <td className="border border-gray-300 px-2 py-1">{filteredCourse['gd point']}</td>
                    <td className="border border-gray-300 px-2 py-1">{filteredCourse.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-2 text-sm">
              <span className="font-bold">SEMESTER REMARK: NP</span>
              <span className="font-bold">GPA: {SEMESTER_RESULTS[index].gpa}</span>
              <span className="font-bold">CGPA: {SEMESTER_RESULTS[index].cgpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultForm;