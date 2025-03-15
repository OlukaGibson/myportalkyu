import Keya from "./keya.jpg";

export const profile = Keya;
export const NAME_SMALL = "Keeya Johnmary";
export const NAME_CAPS = "KEEYA JOHNMARY";
export const NAME_MIX = "KEEYA Johnmary";
export const YEAR_OF_STUDY = ["-----------", "YEAR 1", "YEAR 2", "YEAR 3"];
export const ENROLLING_AS = ["-----------", "FRESH STUDENT", "CONTINUING STUDENT", "RETAKE STUDENT", "FINALIST"];
export const HAVE_RETAKES = ["No", "Yes"];
export const COURSE = "Bachelor of Science in Statistics - (BSTAT)";
export const STUDENT_NUMBER = "2300806773";
export const PASSWORD = "230080";
export const REGISTRATION_NUMBER = "23/U/STE/6773";
export const GENDER = "MALE";
export const DATE_OF_BIRTH = "19/11/2002";
export const FACUILTY = "Faculty of Science";
export const PROGRAMME = "(BSTAT) Bachelor of Science in Statistics";


export const SECTIONS = ["YEAR 1 - 2023/2024 - SEMESTER l", "YEAR 1 - 2023/2024 - SEMESTER ll", "YEAR 2- 2024/2025 - SEMESTER l", "YEAR 2- 2024/2025 - SEMESTER ll"]; //, "YEAR 2- 2022/2023 - SEMESTER ll", "YEAR 3- 2023/2024 - SEMESTER l", "YEAR 3- 2023/2024 - SEMESTER ll"
export const GRADES = ["A", "B", "C", "D", "E", "F"];
export const REMARKS = ["NP", "RETAKE", "MISSING"]
export const ACADEMIC_YEAR = ["2023/2024", "2024/2025"];
export const SEMESTERS = ["SEMESTER l", "SEMESTER ll"];
export const ENROLLED_BY = ["REGISTRA", "SELF"];
export const ENROLLED_TOKEN = ["ENR1441877313", "ENR1441877314", "ENR1441877315"];
export const ENROLLED_DATE = ["2023-10-26", "2024-03-02", "2024-11-28"];
export const ENROLLMENT_TIME = ["08:00:24 AM", "10:00:41 AM", "02:00:23 PM"];
export const TUTION_FEES = [700000, 700000, 1050000];
export const FUNCTIONAL_FEES = [572000, 250000, 572000];
export const INVOICE_NO = ["INV1441877313", "INV1441877314", "INV1441877315"];
export const REGISTRATION_TYPE = ["FULL REGISTRATION", "PARTIAL REGISTRATION"];
export const SEMESTER_RESULTS = [
  {
    'section': SECTIONS[0],
    'gpa': 4.6,
    'cgpa': 4.6,
  },
  {
    'section': SECTIONS[1],
    'gpa': 4.2,
    'cgpa': 4.4,
  },
  {
    'section': SECTIONS[2],
    'gpa': 2.6,
    'cgpa': 3.8,
  },
  {
    'section': SECTIONS[3],
    'gpa': "--",
    'cgpa': "--",
  }
];
export const COURSES = [
  {
    'code': 'SMT1101',
    'title': 'Calculus',
    'Marks': 92,
    'CU': 3,
    'grade': GRADES[0],
    'gd point': 5,
    'remark': REMARKS[0],
    'section': SECTIONS[0]
  },
  {
    'code': 'SMT1102',
    'title': 'Elements of Probability and Statistics',
    'Marks': 87,
    'CU': 4,
    'grade': GRADES[0],
    'gd point': 5,
    'remark': REMARKS[0],
    'section': SECTIONS[0]
  },
  {
    'code': 'STM1103',
    'title': 'Linear Algebra',
    'Marks': 74,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.0,
    'remark': REMARKS[0],
    'section': SECTIONS[0]
  },
  {
    'code': 'SMT1104',
    'title': 'Principles of Sample Surveys',
    'Marks': 75,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.5,
    'remark': REMARKS[0],
    'section': SECTIONS[0]
  },
  {
    'code': 'SMT1105',
    'title': 'Programming Methodology',
    'Marks': 88,
    'CU': 3,
    'grade': GRADES[0],
    'gd point': 5,
    'remark': REMARKS[0],
    'section': SECTIONS[0]
  },
  {
    'code': 'SMT1106',
    'title': 'Explotory Data Analysis',
    'Marks': 75,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.5,
    'remark': REMARKS[0],
    'section': SECTIONS[0]
  },
  {
    'code': 'SMT1201',
    'title': 'Vector Calculus',
    'Marks': 80,
    'CU': 4,
    'grade': GRADES[0],
    'gd point': 5,
    'remark': REMARKS[0],
    'section': SECTIONS[1]
  },
  {
    'code': 'SMT1202',
    'title': 'Linear Programming',
    'Marks': 77,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.5,
    'remark': REMARKS[0],
    'section': SECTIONS[1]
  },
  {
    'code': 'SMT1203',
    'title': 'Operations Research',
    'Marks': 70,
    'CU': 3,
    'grade': GRADES[1],
    'gd point': 4.0,
    'remark': REMARKS[0],
    'section': SECTIONS[1]
  },
  {
    'code': 'SMT1204',
    'title': 'Computation Methods and Data Analysis',
    'Marks': 65,
    'CU': 4,
    'grade': GRADES[2],
    'gd point': 3.5,
    'remark': REMARKS[0],
    'section': SECTIONS[1]
  },
  {
    'code': 'SMT1205',
    'title': 'Economic and Social Statistics',
    'Marks': 70,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.0,
    'remark': REMARKS[0],
    'section': SECTIONS[1]
  },
  {
    'code': 'SMT1206',
    'title': 'Time Series Analysis',
    'Marks': 75,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.5,
    'remark': REMARKS[0],
    'section': SECTIONS[1]
  },
  {
    'code': 'SMT2101',
    'title': 'Ordinary Differential Equations',
    'Marks': "--",
    'CU': 3,
    'grade': "--",
    'gd point': "--",
    'remark': REMARKS[2],
    'section': SECTIONS[2]
  },
  {
    'code': 'SMT2102',
    'title': 'Mathematical Analysis 1',
    'Marks': 70,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.0,
    'remark': REMARKS[0],
    'section': SECTIONS[2]
  },
  {
    'code': 'SMT2103',
    'title': 'Probability Modelling',
    'Marks': 70,
    'CU': 3,
    'grade': GRADES[1],
    'gd point': 4.0,
    'remark': REMARKS[0],
    'section': SECTIONS[2]
  },
  {
    'code': 'SMT2104',
    'title': 'Database Management and Analysis',
    'Marks': 77.2,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.0,
    'remark': REMARKS[0],
    'section': SECTIONS[2]
  },
  {
    'code': 'SMT2105',
    'title': 'Theory of Estimation and Testing Hypotheses',
    'Marks': "--",
    'CU': 3,
    'grade': "--",
    'gd point': "--",
    'remark': REMARKS[2],
    'section': SECTIONS[2]
  },
  {
    'code': 'SMT2106',
    'title': 'Statistical Inference',
    'Marks': 60,
    'CU': 4,
    'grade': GRADES[1],
    'gd point': 4.0,
    'remark': REMARKS[0],
    'section': SECTIONS[2]
  },
];
export const ENROLLMENT_HISTORY = [
  {
    'academicYear': ACADEMIC_YEAR[0],
    'semester': SEMESTERS[0],
    'year' : YEAR_OF_STUDY[1],
    'enrolledas' : ENROLLING_AS[1],
    'enrolledby' : ENROLLED_BY[0],
    'enrolledtoken' : ENROLLED_TOKEN[0],
    'enrolleddate' : ENROLLED_DATE[0],
    'tutionfees' : TUTION_FEES[0],
    'functionalfees' : FUNCTIONAL_FEES[0],
    'section': SECTIONS[0],
  },
  {
    'academicYear': ACADEMIC_YEAR[0],
    'semester': SEMESTERS[0],
    'year' : YEAR_OF_STUDY[1],
    'enrolledas' : ENROLLING_AS[1],
    'enrolledby' : ENROLLED_BY[0],
    'enrolledtoken' : ENROLLED_TOKEN[0],
    'enrolleddate' : ENROLLED_DATE[0],
    'tutionfees' : TUTION_FEES[0],
    'functionalfees' : FUNCTIONAL_FEES[0],
    'section': SECTIONS[1],
  },
  {
    'academicYear': ACADEMIC_YEAR[0],
    'semester': SEMESTERS[0],
    'year' : YEAR_OF_STUDY[1],
    'enrolledas' : ENROLLING_AS[1],
    'enrolledby' : ENROLLED_BY[0],
    'enrolledtoken' : ENROLLED_TOKEN[0],
    'enrolleddate' : ENROLLED_DATE[0],
    'tutionfees' : TUTION_FEES[0],
    'functionalfees' : FUNCTIONAL_FEES[0],
    'section': SECTIONS[2],
  }
];
export const REGISTRATION_HISTORY = [
  {
    'registrationtype' : REGISTRATION_TYPE[0],
    'registeredby' : ENROLLED_BY[0],
    'registrationdate' : ENROLLED_DATE[0],
    'registrationtime' : ENROLLMENT_TIME[0],
    'section': SECTIONS[0],
    //couses which match the section
    'courses' : COURSES.filter(course => course.section === SECTIONS[0])
  },
  {
    'registrationtype' : REGISTRATION_TYPE[0],
    'registeredby' : ENROLLED_BY[0],
    'registrationdate' : ENROLLED_DATE[0],
    'registrationtime' : ENROLLMENT_TIME[0],
    'section': SECTIONS[1],
    //couses which match the section
    'courses' : COURSES.filter(course => course.section === SECTIONS[1])
  },
  {
    'registrationtype' : REGISTRATION_TYPE[0],
    'registeredby' : ENROLLED_BY[0],
    'registrationdate' : ENROLLED_DATE[0],
    'registrationtime' : ENROLLMENT_TIME[0],
    'section': SECTIONS[2],
    //couses which match the section
    'courses' : COURSES.filter(course => course.section === SECTIONS[2])
  },
  
];
export const PAYMENTS_HISTORY = [
  {
    "reference" : INVOICE_NO[0],
    "enityname" : "KEEYA JOHNMARY",
    "amount" : TUTION_FEES[0],
    "bank" : "STANBIC BANK",
    "branch" : "KYAMBOGO AGENT BANKING",
    "paymentdate" : ENROLLED_DATE[0],
  },
  {
    "reference" : INVOICE_NO[1],
    "enityname" : "KEEYA JOHNMARY",
    "amount" : TUTION_FEES[1],
    "bank" : "STANBIC BANK",
    "branch" : "KYAMBOGO AGENT BANKING",
    "paymentdate" : ENROLLED_DATE[1],
  },
  {
    "reference" : INVOICE_NO[2],
    "enityname" : "KEEYA JOHNMARY",
    "amount" : TUTION_FEES[2],
    "bank" : "STANBIC BANK",
    "branch" : "KYAMBOGO AGENT BANKING",
    "paymentdate" : ENROLLED_DATE[2],
  }
];