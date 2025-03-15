import React, { useState, useEffect } from 'react';
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
import Payments from './Payments';

const HomeScreen = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeForm, setActiveForm] = useState('enrollment');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    switch (activeForm) {
      case 'enrollment':
        document.title = 'Enrollment';
        break;
      case 'myResults':
        document.title = 'My Results';
        break;
      case 'myProvisionalResults':
        document.title = 'My Provisional Results';
        break;
      case 'teachingTimetable':
        document.title = 'Teaching Timetable';
        break;
      case 'financeClearance':
        document.title = 'Finance Clearance';
        break;
      case 'generatePRN':
        document.title = 'Generate PRN';
        break;
      case 'enrollmenthistory':
        document.title = 'Enrollment History';
        break;
      case 'registrationhistory':
        document.title = 'Registration History';
        break;
      case 'applyforservices':
        document.title = 'Apply for Services';
        break;
      case 'newidcards':
        document.title = 'New ID Cards';
        break;
      case 'servicehistory':
        document.title = 'Service History';
        break;
      case 'payments':
        document.title = 'Payments';
        break;
      default:
        document.title = 'Enrollment';
        break;
    }
  }, [activeForm]);

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
      case 'payments':
        return <Payments />;
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