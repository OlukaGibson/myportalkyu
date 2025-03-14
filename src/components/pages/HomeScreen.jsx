import React, { useState } from 'react';
import Sidebar from './Sidebar';
import StatusSection from './StatusSection';
import EnrollmentForm from './EnrollmentForm';
import ResultForm from './ResultForm';
import ProvisionalResultsForm from './ProvisionalResultsForm';
import TeachingTimetableForm from './TeachingTimetableForm';
import Finance_ClearanceForm from './Finance_ClearanceForm';
import GeneratePRN from './GeneratePRN';
import MyEnrollmentHistory from './MyEnrollmentHistory';
import MyRegistrationHistory from './MyRegistrationHistory';
import ApplyForServices from './ApplyForServices';
import MyIdentificationCard from './MyIdentificationCard';
import ServiceHistory from './ServiceHistory';

const HomeScreen = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeForm, setActiveForm] = useState('enrollment');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'enrollment':
        return <EnrollmentForm />;
      case 'myResults':
        return <ResultForm />;
      case 'myProvisionalResults':
        return <ProvisionalResultsForm />;
      case 'teachingTimetable':
        return <TeachingTimetableForm />;
      case 'financeClearance':
        return <Finance_ClearanceForm />;
      case 'generatePRN':
        return <GeneratePRN />;
      case 'enrollmenthistory':
        return <MyEnrollmentHistory />;
      case 'registrationhistory':
        return <MyRegistrationHistory />;
      case 'applyforservices':
        return <ApplyForServices />;
      case 'newidcards':
        return <MyIdentificationCard />;
      case 'servicehistory':
        return <ServiceHistory />;
      default:
        return <EnrollmentForm />;
    }
  };

  return (
    <div className="min-h-screen bg-[#e7f4fd] p-4">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setActiveForm={setActiveForm} />
      {/* Status Section */}
      <StatusSection toggleSidebar={toggleSidebar} />
      {/* Active Form */}
      {renderActiveForm()}
    </div>
  );
};

export default HomeScreen;