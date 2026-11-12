export type PersonaKey =
  | "STUDENT"
  | "WORKER"
  | "TEACHER"
  | "MANAGER"
  | "HOD"
  | "ADMINISTRATOR"
  | "PARENT"
  | "LIBRARIAN"
  | "PLACEMENT_OFFICER"
  | "WARDEN"
  | "ACCOUNTANT"
  | "TRANSPORT_MANAGER"
  | "MEDICAL_STAFF"
  | "LAB_MANAGER"
  | "STORE_MANAGER"
  | "MAINTENANCE_STAFF"
  | "IT_ADMIN"
  | "SUPER_ADMIN"
  | "ALUMNI";

export type PersonaModule = {
  slug: string;
  label: string;
  detail: string;
  icon: string;
  href?: string;
};

export type PersonaConfig = {
  label: string;
  signInTitle: string;
  summary: string;
  color: string;
  icon: string;
  demoEmail: string;
  dashboardIntro: string;
  modules: PersonaModule[];
  metrics: [string, string][];
  permissions: string[];
};

const m = (
  slug: string,
  label: string,
  detail: string,
  icon: string,
  href?: string,
): PersonaModule => ({ slug, label, detail, icon, href });

const common = {
  notifications: m("notifications", "Notifications", "Important updates and alerts", "Bell", "/employee/notifications"),
  ai: m("ai-help", "AI Help", "Get simple, contextual assistance", "BrainCircuit", "/personal/ai-coach"),
  tasks: m("personal-tasks", "Personal Tasks", "Plan and finish personal work", "CheckSquare2", "/personal/tasks"),
  goals: m("goals", "Goals", "Set targets and follow progress", "Target", "/personal/goals"),
};

export const personaOrder: PersonaKey[] = [
  "STUDENT", "PARENT", "TEACHER", "WORKER", "MANAGER", "HOD",
  "LIBRARIAN", "PLACEMENT_OFFICER", "WARDEN", "ACCOUNTANT",
  "TRANSPORT_MANAGER", "MEDICAL_STAFF", "LAB_MANAGER", "STORE_MANAGER",
  "MAINTENANCE_STAFF", "IT_ADMIN", "ADMINISTRATOR", "SUPER_ADMIN", "ALUMNI",
];

export const personaConfig: Record<PersonaKey, PersonaConfig> = {
  STUDENT: {
    label: "Student", signInTitle: "Student Sign In", color: "bg-blue-600", icon: "GraduationCap",
    demoEmail: "student@psitpro.local",
    summary: "Learning, timetable, attendance, assignments, exams, results, goals, fees, campus services, career planning and AI help",
    dashboardIntro: "Your studies, campus life and personal plans in one place.",
    modules: [
      m("learning", "Learning", "Courses, notes and study progress", "BookOpen", "/personal/learning"),
      m("timetable", "Timetable", "Classes and today's schedule", "CalendarClock", "/employee/timetable"),
      m("student-attendance", "Attendance", "Subject and monthly attendance", "ClipboardCheck"),
      m("assignments", "Assignments", "Work to submit and deadlines", "FileCheck2"),
      m("exams-results", "Exams & Results", "Exam schedule, marks and results", "ChartNoAxesColumn"),
      common.goals, common.tasks,
      m("fees", "Fees", "Dues, receipts and payment history", "IndianRupee"),
      m("library", "Library", "Issued books and reservations", "Library"),
      m("hostel", "Hostel", "Room, mess and outpass", "Building2"),
      m("transport", "Transport", "Route, stop and bus schedule", "Bus"),
      m("placements", "Placements", "Jobs, drives and applications", "BriefcaseBusiness"),
      m("career-planning", "Career Planning", "Skills, goals and opportunities", "Compass"),
      common.ai,
    ],
    metrics: [["Attendance", "94%"], ["Assignments due", "3"], ["Learning progress", "72%"], ["Upcoming exams", "2"]],
    permissions: ["View own academic records", "Submit own assignments", "Manage personal plans", "Use student services"],
  },
  WORKER: {
    label: "Worker", signInTitle: "Worker Sign In", color: "bg-emerald-600", icon: "HardHat",
    demoEmail: "employee@psitpro.local",
    summary: "Attendance, salary, leave, duties, shifts, tasks, documents, notifications and personal tools",
    dashboardIntro: "Your daily duties, attendance and workplace services.",
    modules: [
      m("attendance", "Attendance", "Check in, check out and history", "Clock3", "/employee/attendance"),
      m("salary", "Salary", "Payslips and salary history", "IndianRupee", "/employee/payroll"),
      m("leave", "Leave", "Balance, requests and history", "Palmtree", "/employee/leave"),
      m("duties-shifts", "Duties & Shifts", "Assigned duties and shift schedule", "CalendarRange"),
      m("work-tasks", "Tasks", "Daily workplace tasks", "CheckSquare2", "/employee/tasks"),
      m("documents", "Documents", "Work files and certificates", "Files", "/employee/documents"),
      common.notifications, common.tasks, common.ai,
    ],
    metrics: [["Attendance", "Present"], ["Working hours", "7h 42m"], ["Open duties", "6"], ["Leave balance", "12 days"]],
    permissions: ["View own employment records", "Manage own attendance and leave", "Complete assigned duties", "Access personal documents"],
  },
  TEACHER: {
    label: "Teacher", signInTitle: "Teacher Sign In", color: "bg-purple-600", icon: "Presentation",
    demoEmail: "teacher@psitpro.local",
    summary: "Timetable, classes, teaching tasks, attendance, assignments, exams, marks, performance, mentoring, training, research and AI assistance",
    dashboardIntro: "Your classes, students, teaching work and professional growth.",
    modules: [
      m("teacher-timetable", "Timetable & Classes", "Classes, rooms and substitutions", "CalendarClock", "/employee/timetable"),
      m("teaching-tasks", "Teaching Tasks", "Teaching and department duties", "CheckSquare2", "/employee/tasks"),
      m("class-attendance", "Class Attendance", "Record and review attendance", "ClipboardCheck"),
      m("assignment-management", "Assignments", "Create, collect and review work", "FileCheck2"),
      m("exam-marks", "Exams & Marks", "Schedules, evaluation and marks", "ChartNoAxesColumn"),
      m("student-performance", "Student Performance", "Progress and intervention signals", "TrendingUp"),
      m("mentoring", "Mentoring", "Mentees, notes and follow-ups", "UsersRound"),
      m("training", "Training", "Assigned professional learning", "GraduationCap", "/employee/learning"),
      m("research", "Research", "Projects, publications and activity", "FlaskConical"),
      common.ai,
    ],
    metrics: [["Classes today", "4"], ["Pending reviews", "18"], ["Student attendance", "91%"], ["Mentoring follow-ups", "3"]],
    permissions: ["Manage assigned classes", "Record attendance and marks", "Review assigned students", "Access approved teaching resources"],
  },
  MANAGER: {
    label: "Manager", signInTitle: "Manager Sign In", color: "bg-amber-600", icon: "UsersRound",
    demoEmail: "manager@psitpro.local",
    summary: "Team management, approvals, workload, progress, planning, reports, meetings, goals, analytics and personal planning",
    dashboardIntro: "Your team, approvals, delivery and department priorities.",
    modules: [
      m("team-management", "Team Management", "People, availability and responsibilities", "UsersRound", "/manager/dashboard"),
      m("approvals", "Approvals", "Leave, expenses and requests", "BadgeCheck", "/manager/dashboard"),
      m("workload-progress", "Workload & Progress", "Capacity, tasks and delivery", "ChartNoAxesColumn", "/manager/dashboard"),
      m("department-planning", "Department Planning", "Plans, resources and milestones", "PanelsTopLeft"),
      m("management-reports", "Reports & Analytics", "Authorized operational reports", "FileBarChart", "/reports"),
      m("meetings", "Meetings", "Team meetings and actions", "MessagesSquare", "/employee/meetings"),
      common.goals, common.tasks, common.ai,
    ],
    metrics: [["Team members", "10"], ["Pending approvals", "6"], ["Tasks on track", "87%"], ["Meetings today", "2"]],
    permissions: ["Manage assigned team", "Approve authorized requests", "View team analytics", "Create team plans and tasks"],
  },
  ADMINISTRATOR: {
    label: "Administrator", signInTitle: "Administrator Sign In", color: "bg-slate-700", icon: "ShieldCheck",
    demoEmail: "admin@psitpro.local",
    summary: "Complete system management across people, academics, campus operations, finance, communication, analytics, AI and security",
    dashboardIntro: "Central visibility and governed management across PSIT Pro.",
    modules: [
      m("system-management", "System Management", "Users, departments and configuration", "ShieldCheck", "/admin/dashboard"),
      m("people-departments", "People & Departments", "People, roles and departments", "UsersRound", "/employee/directory"),
      m("academics-parents", "Academics & Parents", "Programs, classes and guardians", "GraduationCap"),
      m("library-admin", "Library", "Library operations and reports", "Library"),
      m("finance-admin", "Finance", "Fees, payroll, budgets and reports", "Landmark", "/reports"),
      m("hostel-transport-medical", "Campus Services", "Hostel, transport and medical center", "Building2"),
      m("placement-training", "Placement & Training", "Careers, drives and learning", "BriefcaseBusiness"),
      m("labs-equipment", "Labs & Equipment", "Laboratories and equipment lifecycle", "FlaskConical"),
      m("inventory-procurement", "Inventory & Procurement", "Stock, vendors and purchasing", "PackageSearch"),
      m("infrastructure", "Infrastructure", "Facilities and maintenance", "Wrench"),
      m("communication-events", "Communication & Events", "Notices, messages and events", "Megaphone"),
      m("alumni-admin", "Alumni", "Alumni network and engagement", "Network"),
      m("analytics-reports", "Analytics & Reports", "Organization-wide intelligence", "FileBarChart", "/reports"),
      common.ai,
      m("security", "Security", "Roles, permissions, logs and backups", "LockKeyhole", "/admin/dashboard"),
    ],
    metrics: [["Active users", "50"], ["Departments", "7"], ["Open requests", "14"], ["System health", "Healthy"]],
    permissions: ["Central visibility across authorized modules", "Manage roles and permissions", "Review audit activity", "Configure organization settings"],
  },
  PARENT: {
    label: "Parent / Guardian", signInTitle: "Parent / Guardian Sign In", color: "bg-rose-600", icon: "HeartHandshake",
    demoEmail: "parent@psitpro.local",
    summary: "Student attendance, performance, results, fees, assignments, timetable, examinations, notices, communication and alerts",
    dashboardIntro: "The important academic and campus updates for your linked student.",
    modules: [
      m("ward-attendance", "Student Attendance", "Attendance and absence alerts", "ClipboardCheck"),
      m("ward-performance", "Academic Performance", "Progress, marks and results", "TrendingUp"),
      m("ward-fees", "Fees", "Dues, receipts and payment status", "IndianRupee"),
      m("ward-assignments", "Assignments", "Current work and deadlines", "FileCheck2"),
      m("ward-timetable", "Timetable & Exams", "Classes and examination schedule", "CalendarClock"),
      m("parent-notices", "Notices", "School and department updates", "Newspaper", "/employee/notices"),
      m("parent-communication", "Communication", "Contact teachers and support", "MessagesSquare", "/employee/messages"),
      common.notifications,
    ],
    metrics: [["Attendance", "94%"], ["Assignments due", "3"], ["Fee status", "Paid"], ["New alerts", "2"]],
    permissions: ["View linked student records", "View and pay authorized fees", "Contact assigned staff", "Receive important alerts"],
  },
  LIBRARIAN: {
    label: "Librarian", signInTitle: "Librarian Sign In", color: "bg-cyan-700", icon: "Library",
    demoEmail: "librarian@psitpro.local",
    summary: "Books, members, issue and return, reservations, fines, digital library, inventory and library reports",
    dashboardIntro: "Circulation, collections, members and library operations.",
    modules: [
      m("books-catalogue", "Books & Catalogue", "Catalogue and collection records", "BookOpen"),
      m("library-members", "Members", "Student and staff memberships", "UsersRound"),
      m("issue-return", "Issue / Return", "Circulation desk operations", "ArrowLeftRight"),
      m("reservations-fines", "Reservations & Fines", "Queues, dues and collections", "ReceiptText"),
      m("digital-library", "Digital Library", "Digital resources and access", "MonitorDown"),
      m("library-inventory", "Inventory", "Stock verification and condition", "Boxes"),
      m("library-reports", "Library Reports", "Usage, inventory and fine reports", "FileBarChart", "/reports"),
      common.notifications,
    ],
    metrics: [["Books issued today", "42"], ["Returns due", "18"], ["Reservations", "9"], ["Inventory alerts", "4"]],
    permissions: ["Manage library catalogue", "Manage issue and return", "View member library status", "Run library reports"],
  },
  PLACEMENT_OFFICER: {
    label: "Placement Officer", signInTitle: "Placement Officer Sign In", color: "bg-indigo-600", icon: "BriefcaseBusiness",
    demoEmail: "placement@psitpro.local",
    summary: "Companies, jobs, drives, eligibility, applications, interviews, offers, training, internships and placement analytics",
    dashboardIntro: "Placement drives, student readiness and employer engagement.",
    modules: [
      m("placement-companies", "Companies", "Recruiters and employer contacts", "Building2"),
      m("job-postings", "Jobs & Internships", "Open opportunities and criteria", "BriefcaseBusiness"),
      m("placement-drives", "Placement Drives", "Schedules and participation", "CalendarRange"),
      m("student-eligibility", "Student Eligibility", "Criteria and eligible candidates", "BadgeCheck"),
      m("applications-interviews", "Applications & Interviews", "Pipeline and interview rounds", "ListChecks"),
      m("offers", "Offers", "Offer status and outcomes", "Award"),
      m("placement-training", "Training", "Readiness programs and progress", "GraduationCap"),
      m("placement-analytics", "Placement Analytics", "Conversion and outcome reports", "TrendingUp", "/reports"),
      common.notifications,
    ],
    metrics: [["Active companies", "24"], ["Open roles", "38"], ["Interviews this week", "16"], ["Offers", "11"]],
    permissions: ["Manage placement opportunities", "View eligible student profiles", "Manage drive pipelines", "Run placement analytics"],
  },
  WARDEN: {
    label: "Warden", signInTitle: "Warden Sign In", color: "bg-orange-700", icon: "Building2",
    demoEmail: "warden@psitpro.local",
    summary: "Hostel rooms, allocation, attendance, outpass, mess, complaints, fees, visitors and hostel reports",
    dashboardIntro: "Hostel occupancy, student safety and daily operations.",
    modules: [
      m("hostel-rooms", "Rooms & Allocation", "Occupancy and student allocation", "BedDouble"),
      m("hostel-attendance", "Hostel Attendance", "Daily presence and exceptions", "ClipboardCheck"),
      m("outpass", "Outpass", "Requests, approvals and return status", "DoorOpen"),
      m("mess", "Mess", "Menus, attendance and feedback", "Utensils"),
      m("hostel-complaints", "Complaints", "Resident issues and resolution", "MessageSquareWarning"),
      m("hostel-fees", "Hostel Fees", "Dues and payment status", "IndianRupee"),
      m("visitors", "Visitors", "Visitor entry and approvals", "Contact"),
      m("hostel-reports", "Hostel Reports", "Occupancy and operations reports", "FileBarChart", "/reports"),
      common.notifications,
    ],
    metrics: [["Occupied rooms", "186"], ["Outpasses active", "12"], ["Open complaints", "7"], ["Visitors today", "9"]],
    permissions: ["Manage assigned hostels", "Approve authorized outpasses", "Record visitors and attendance", "Run hostel reports"],
  },
  ACCOUNTANT: {
    label: "Accountant", signInTitle: "Accountant Sign In", color: "bg-green-700", icon: "Calculator",
    demoEmail: "accountant@psitpro.local",
    summary: "Fees, salary, expenses, income, scholarships, refunds, invoices, receipts, budgets, transactions and financial reports",
    dashboardIntro: "Financial operations, collections, payments and reporting.",
    modules: [
      m("fee-management", "Fees", "Student fees, dues and collections", "IndianRupee"),
      m("salary-management", "Salary", "Authorized payroll processing", "WalletCards", "/employee/payroll"),
      m("expenses-income", "Expenses & Income", "Transactions and reconciliation", "ArrowDownUp"),
      m("scholarships-refunds", "Scholarships & Refunds", "Awards, adjustments and refunds", "HandCoins"),
      m("invoices-receipts", "Invoices & Receipts", "Billing documents and receipts", "ReceiptText"),
      m("budgets", "Budgets", "Department budgets and controls", "ChartPie"),
      m("financial-reports", "Financial Reports", "Authorized finance analytics", "FileBarChart", "/reports"),
      common.notifications,
    ],
    metrics: [["Collections today", "₹4.8L"], ["Pending invoices", "23"], ["Refunds pending", "6"], ["Budget used", "68%"]],
    permissions: ["Manage authorized financial records", "Process approved transactions", "Access restricted payroll data", "Run finance reports"],
  },
  TRANSPORT_MANAGER: {
    label: "Transport Manager", signInTitle: "Transport Manager Sign In", color: "bg-sky-700", icon: "Bus",
    demoEmail: "transport@psitpro.local",
    summary: "Vehicles, routes, stops, drivers, schedules, allocations, transport fees, maintenance and reports",
    dashboardIntro: "Fleet, routes, passengers and transport operations.",
    modules: [
      m("vehicles-drivers", "Vehicles & Drivers", "Fleet and driver records", "Bus"),
      m("routes-stops", "Routes & Stops", "Route plans and stop coverage", "Route"),
      m("transport-schedules", "Schedules", "Trips and timing", "CalendarClock"),
      m("transport-allocation", "Student Allocation", "Passenger and seat assignment", "UsersRound"),
      m("transport-fees", "Transport Fees", "Dues and collections", "IndianRupee"),
      m("vehicle-maintenance", "Maintenance", "Service plans and faults", "Wrench"),
      m("transport-reports", "Transport Reports", "Fleet and route analytics", "FileBarChart", "/reports"),
      common.notifications,
    ],
    metrics: [["Vehicles active", "28"], ["Routes running", "16"], ["Seats available", "74"], ["Maintenance due", "3"]],
    permissions: ["Manage fleet and routes", "Allocate authorized passengers", "Track transport fee status", "Run transport reports"],
  },
  MEDICAL_STAFF: {
    label: "Medical Staff", signInTitle: "Medical Staff Sign In", color: "bg-red-600", icon: "Stethoscope",
    demoEmail: "medical@psitpro.local",
    summary: "Medical center, appointments, visits, emergency information, medicine inventory and restricted medical records",
    dashboardIntro: "Appointments, care visits, emergencies and secure clinical records.",
    modules: [
      m("medical-center", "Medical Center", "Daily center operations", "Hospital"),
      m("appointments", "Appointments", "Bookings and care schedule", "CalendarClock"),
      m("medical-visits", "Student & Staff Visits", "Visit queue and outcomes", "ClipboardPlus"),
      m("emergency-information", "Emergency Information", "Restricted emergency details", "Siren"),
      m("medicine-inventory", "Medicine Inventory", "Stock, expiry and dispensing", "Pill"),
      m("medical-records", "Medical Records", "Restricted health records", "FileLock2"),
      common.notifications,
    ],
    metrics: [["Appointments today", "12"], ["Waiting", "3"], ["Medicine alerts", "5"], ["Emergency status", "Ready"]],
    permissions: ["Access authorized medical records", "Record care visits", "Manage medicine inventory", "View emergency information when authorized"],
  },
  LAB_MANAGER: {
    label: "Lab Manager", signInTitle: "Lab Manager Sign In", color: "bg-violet-700", icon: "FlaskConical",
    demoEmail: "lab@psitpro.local",
    summary: "Laboratories, equipment, practical schedules, allocation, maintenance, consumables and lab reports",
    dashboardIntro: "Laboratory schedules, equipment, safety and consumables.",
    modules: [
      m("laboratories", "Laboratories", "Rooms, capacity and readiness", "FlaskConical"),
      m("lab-equipment", "Equipment", "Equipment records and condition", "Microscope"),
      m("practical-schedules", "Practical Schedules", "Sessions and lab bookings", "CalendarRange"),
      m("equipment-allocation", "Equipment Allocation", "Issue, return and responsibility", "ArrowLeftRight"),
      m("lab-maintenance", "Maintenance", "Service requests and downtime", "Wrench"),
      m("consumables", "Consumables", "Stock, usage and reorder levels", "Boxes"),
      m("lab-reports", "Lab Reports", "Utilization and inventory reports", "FileBarChart", "/reports"),
      common.notifications,
    ],
    metrics: [["Labs active", "9"], ["Practicals today", "14"], ["Equipment due back", "7"], ["Stock alerts", "6"]],
    permissions: ["Manage assigned laboratories", "Allocate equipment", "Maintain consumable inventory", "Run lab reports"],
  },
  STORE_MANAGER: {
    label: "Store / Procurement Manager", signInTitle: "Store / Procurement Sign In", color: "bg-yellow-700", icon: "PackageSearch",
    demoEmail: "procurement@psitpro.local",
    summary: "Inventory, assets, stock, vendors, requests, quotations, purchase orders, goods received, allocation and reports",
    dashboardIntro: "Inventory control, vendors and the complete purchasing cycle.",
    modules: [
      m("inventory-assets", "Inventory & Assets", "Items, stock and asset register", "Boxes"),
      m("vendors", "Vendors", "Supplier records and performance", "Store"),
      m("purchase-requests", "Purchase Requests", "Department requests and review", "ClipboardList"),
      m("quotations", "Quotations", "Vendor quotes and comparison", "Files"),
      m("purchase-orders", "Purchase Orders", "Approved orders and status", "FileCheck2"),
      m("goods-received", "Goods Received", "Receipts and inspection", "PackageCheck"),
      m("asset-allocation", "Asset Allocation", "Issue, transfer and return", "ArrowLeftRight"),
      m("procurement-reports", "Procurement Reports", "Spend and stock analytics", "FileBarChart", "/reports"),
      common.notifications,
    ],
    metrics: [["Open requests", "18"], ["Purchase orders", "9"], ["Low-stock items", "11"], ["Deliveries due", "5"]],
    permissions: ["Manage inventory and vendors", "Process approved purchase requests", "Record goods received", "Run procurement reports"],
  },
  IT_ADMIN: {
    label: "IT / System Administrator", signInTitle: "IT / System Administrator Sign In", color: "bg-slate-800", icon: "ServerCog",
    demoEmail: "systemadmin@psitpro.local",
    summary: "Users, roles, permissions, authentication, devices, settings, integrations, backups, logs and security",
    dashboardIntro: "Identity, devices, integrations and platform security.",
    modules: [
      m("user-access", "Users & Access", "Accounts, roles and permissions", "UserCog"),
      m("authentication", "Authentication", "Sessions, policies and access events", "KeyRound"),
      m("devices", "Devices", "Managed devices and health", "MonitorCog"),
      m("system-settings", "System Settings", "Platform configuration", "Settings"),
      m("integrations", "Integrations", "Connected services and status", "PlugZap"),
      m("backups", "Backups", "Backup status and recovery", "DatabaseBackup"),
      m("system-logs", "Logs", "Audit and system activity", "ScrollText", "/admin/dashboard"),
      m("it-security", "Security", "Risks, alerts and controls", "ShieldCheck"),
      common.notifications,
    ],
    metrics: [["Active users", "50"], ["Managed devices", "64"], ["Security alerts", "2"], ["Last backup", "Today"]],
    permissions: ["Manage system identities", "Configure approved integrations", "Review system and security logs", "Manage backup operations"],
  },
  HOD: {
    label: "HOD / Department Head", signInTitle: "HOD Sign In", color: "bg-teal-700", icon: "UsersRound",
    demoEmail: "hod@psitpro.local",
    summary: "Department faculty, students, timetable, subjects, academics, exams, workload, approvals, reports and planning",
    dashboardIntro: "Your authorized department, academic delivery and faculty workload.",
    modules: [
      m("department-overview", "Department Dashboard", "Department performance and priorities", "ChartNoAxesColumn"),
      m("hod-faculty", "Faculty", "Faculty assignments and availability", "UsersRound"),
      m("hod-students", "Students", "Department student progress", "GraduationCap"),
      m("hod-timetable", "Timetable", "Department timetable management", "CalendarClock"),
      m("hod-subjects", "Subjects", "Subject and faculty allocation", "BookOpen"),
      m("hod-attendance", "Attendance", "Department attendance oversight", "ClipboardCheck"),
      m("hod-academics", "Academics", "Syllabus and academic delivery", "FileCheck2"),
      m("hod-exams-results", "Exams & Results", "Assessment and result oversight", "ChartNoAxesColumn"),
      m("faculty-workload", "Faculty Workload", "Teaching and administrative capacity", "ChartPie"),
      m("hod-approvals", "Approvals", "Department requests and decisions", "BadgeCheck"),
      m("hod-reports", "Reports", "Authorized department reports", "FileBarChart", "/reports"),
      m("department-planning", "Department Planning", "Plans, goals and resources", "PanelsTopLeft"),
      common.notifications, common.ai,
    ],
    metrics: [["Faculty", "24"], ["Students", "620"], ["Attendance", "89%"], ["Pending approvals", "7"]],
    permissions: ["Manage only assigned department", "Assign authorized subjects and faculty", "Approve department requests", "View department analytics"],
  },
  MAINTENANCE_STAFF: {
    label: "Maintenance Staff", signInTitle: "Maintenance Staff Sign In", color: "bg-stone-700", icon: "Building2",
    demoEmail: "maintenance@psitpro.local",
    summary: "Buildings, rooms, classrooms, laboratories, furniture, electrical, IT equipment, work orders, technicians and repairs",
    dashboardIntro: "Campus maintenance requests, assigned work and verification.",
    modules: [
      m("maintenance-buildings", "Buildings", "Building condition and service history", "Building2"),
      m("maintenance-rooms", "Rooms & Classrooms", "Room assets and service status", "DoorOpen"),
      m("maintenance-labs", "Laboratories", "Laboratory infrastructure issues", "FlaskConical"),
      m("maintenance-furniture", "Furniture", "Furniture inventory and repairs", "Boxes"),
      m("maintenance-electrical", "Electrical", "Electrical requests and inspections", "PlugZap"),
      m("maintenance-it-equipment", "IT Equipment", "Technical equipment service work", "MonitorCog"),
      m("maintenance-requests", "Maintenance Requests", "Reported issues and priorities", "ClipboardList"),
      m("work-orders", "Work Orders", "Assigned jobs and completion", "Wrench"),
      m("technicians", "Technicians", "Skills, workload and assignment", "UsersRound"),
      m("repairs", "Repairs", "Repair progress and verification", "CheckSquare2"),
      m("maintenance-reports", "Reports", "Maintenance analytics and history", "FileBarChart", "/reports"),
      common.notifications,
    ],
    metrics: [["Open requests", "18"], ["Assigned today", "7"], ["High priority", "3"], ["Completed this week", "26"]],
    permissions: ["View assigned maintenance work", "Update authorized work orders", "Record repair evidence", "Cannot close work without verification"],
  },
  SUPER_ADMIN: {
    label: "Super Admin", signInTitle: "Super Admin Sign In", color: "bg-black", icon: "ShieldCheck",
    demoEmail: "superadmin@psitpro.local",
    summary: "Institutions, administrators, roles, permissions, global configuration, security, audits, backups, integrations and system health",
    dashboardIntro: "Critical system governance and global PSIT Pro configuration.",
    modules: [
      m("institution-management", "Institutions & Campuses", "Institution and campus configuration", "Building2"),
      m("administrator-management", "Administrators", "Administrator accounts and scope", "UserCog"),
      m("role-permissions", "Roles & Permissions", "Global RBAC policy", "LockKeyhole"),
      m("global-departments", "Departments", "Organization structure", "PanelsTopLeft"),
      m("global-configuration", "System Configuration", "Critical global settings", "Settings"),
      m("auth-configuration", "Authentication", "Login, MFA and session policy", "KeyRound"),
      m("security-configuration", "Security", "Security policy and controls", "ShieldCheck"),
      m("global-audit-logs", "Audit Logs", "Protected system activity", "ScrollText", "/admin/dashboard"),
      m("backup-recovery", "Backup & Recovery", "Backup, restore and continuity", "DatabaseBackup"),
      m("integration-management", "Integrations", "External service configuration", "PlugZap"),
      m("system-health", "System Health", "Availability and performance", "ChartNoAxesColumn"),
      m("api-configuration", "API Configuration", "API access and credentials", "ServerCog"),
      common.notifications,
    ],
    metrics: [["Institutions", "1"], ["Administrators", "3"], ["Security alerts", "2"], ["System health", "Healthy"]],
    permissions: ["Manage critical global configuration", "Manage administrators and RBAC", "Access protected audit logs", "Control backup and integrations"],
  },
  ALUMNI: {
    label: "Alumni", signInTitle: "Alumni Sign In", color: "bg-fuchsia-700", icon: "Network",
    demoEmail: "alumni@psitpro.local",
    summary: "Alumni profile, batch, career information, networking, mentorship, events, referrals, internships and donations",
    dashboardIntro: "Your alumni network, career community and ways to contribute.",
    modules: [
      m("alumni-profile", "Alumni Profile", "Batch and career information", "UserRound"),
      m("alumni-network", "Networking", "Find and connect with alumni", "Network"),
      m("alumni-mentorship", "Mentorship", "Mentor or request guidance", "HeartHandshake"),
      m("alumni-events", "Events", "Reunions and community events", "CalendarDays", "/employee/events"),
      m("referrals-internships", "Referrals & Internships", "Share career opportunities", "BriefcaseBusiness"),
      m("donations", "Donations", "Support approved initiatives", "HandHeart"),
      m("alumni-messages", "Communication", "Messages and community updates", "MessagesSquare", "/employee/messages"),
      common.notifications,
    ],
    metrics: [["Network members", "2,480"], ["Upcoming events", "3"], ["Mentorship requests", "5"], ["Open referrals", "12"]],
    permissions: ["Manage own alumni profile", "Participate in networking", "Create authorized opportunities", "View alumni events and notices"],
  },
};

export function isPersona(value: string): value is PersonaKey {
  return value in personaConfig;
}

export function moduleHref(module: PersonaModule) {
  return module.href ?? `/portal/${module.slug}`;
}

export function canAccessModule(persona: PersonaKey, slug: string) {
  return persona === "ADMINISTRATOR" || persona === "SUPER_ADMIN" || personaConfig[persona].modules.some((item) => item.slug === slug);
}

export function findModule(slug: string) {
  for (const key of personaOrder) {
    const found = personaConfig[key].modules.find((item) => item.slug === slug);
    if (found) return found;
  }
  return undefined;
}