import type { PersonaModule } from "@/lib/persona-config";
import type { PersonaKey } from "@/lib/persona-config";

export type ModuleExperience = {
  area: string;
  recordName: string;
  referenceLabel: string;
  categoryLabel: string;
  metricLabel: string;
  primaryAction: string;
  statuses: string[];
  categories: string[];
  quickActions: string[];
  helpText: string;
};

const includesAny = (value: string, words: string[]) => words.some((word) => value.includes(word));

export function moduleExperience(item: PersonaModule): ModuleExperience {
  const value = `${item.slug} ${item.label} ${item.detail}`.toLowerCase();
  if (includesAny(value, ["library", "book", "issue-return", "reservations-fines"])) return {
    area: "Library Services", recordName: "library item", referenceLabel: "Book / Member ID",
    categoryLabel: "Material type", metricLabel: "Fine / Copies", primaryAction: "Add Library Record",
    statuses: ["AVAILABLE", "ISSUED", "RESERVED", "OVERDUE", "RETURNED"],
    categories: ["Book", "Journal", "Digital Resource", "Member", "Reservation"],
    quickActions: ["Issue a book", "Return an item", "Reserve a title", "Collect a fine"],
    helpText: "Manage circulation, availability, members and library accountability.",
  };
  if (includesAny(value, ["placement", "job", "internship", "interview", "offer", "eligibility"])) return {
    area: "Placement & Career", recordName: "placement record", referenceLabel: "Company / Drive ID",
    categoryLabel: "Opportunity type", metricLabel: "Package / Eligibility", primaryAction: "Add Opportunity",
    statuses: ["OPEN", "ELIGIBLE", "APPLIED", "INTERVIEW", "OFFERED", "CLOSED"],
    categories: ["Full-time Job", "Internship", "Placement Drive", "Training", "Interview"],
    quickActions: ["Add company", "Publish job", "Check eligibility", "Schedule interview"],
    helpText: "Track employers, opportunities, applications, interviews and outcomes.",
  };
  if (includesAny(value, ["hostel", "room", "outpass", "mess", "visitor"])) return {
    area: "Hostel Operations", recordName: "hostel record", referenceLabel: "Room / Student ID",
    categoryLabel: "Hostel service", metricLabel: "Fee / Occupancy", primaryAction: "Add Hostel Record",
    statuses: ["ACTIVE", "PENDING", "APPROVED", "CHECKED_OUT", "RESOLVED"],
    categories: ["Room Allocation", "Outpass", "Mess", "Complaint", "Visitor", "Hostel Fee"],
    quickActions: ["Allocate room", "Review outpass", "Record visitor", "Resolve complaint"],
    helpText: "Manage resident safety, accommodation, mess, outpasses and support.",
  };
  if (includesAny(value, ["transport", "vehicle", "route", "driver", "stop"])) return {
    area: "Transport Operations", recordName: "transport record", referenceLabel: "Route / Vehicle ID",
    categoryLabel: "Transport type", metricLabel: "Seats / Fee", primaryAction: "Add Transport Record",
    statuses: ["ACTIVE", "SCHEDULED", "DELAYED", "MAINTENANCE", "INACTIVE"],
    categories: ["Vehicle", "Route", "Stop", "Driver", "Passenger Allocation", "Maintenance"],
    quickActions: ["Create route", "Assign vehicle", "Allocate passenger", "Schedule maintenance"],
    helpText: "Coordinate fleet, routes, schedules, passengers and maintenance.",
  };
  if (includesAny(value, ["medical", "appointment", "medicine", "emergency", "health"])) return {
    area: "Medical Center", recordName: "medical record", referenceLabel: "Visit / Patient ID",
    categoryLabel: "Care type", metricLabel: "Quantity / Reading", primaryAction: "Add Care Record",
    statuses: ["WAITING", "IN_PROGRESS", "COMPLETED", "FOLLOW_UP", "RESTRICTED"],
    categories: ["Appointment", "Student Visit", "Staff Visit", "Emergency", "Medicine", "Inventory"],
    quickActions: ["Book appointment", "Record visit", "Open emergency case", "Update medicine stock"],
    helpText: "Handle authorized care safely. Restricted medical information remains protected.",
  };
  if (includesAny(value, ["lab", "laborator", "equipment", "practical", "consumable"])) return {
    area: "Laboratory Management", recordName: "lab record", referenceLabel: "Lab / Equipment ID",
    categoryLabel: "Lab item type", metricLabel: "Quantity / Capacity", primaryAction: "Add Lab Record",
    statuses: ["AVAILABLE", "ALLOCATED", "IN_USE", "MAINTENANCE", "LOW_STOCK"],
    categories: ["Laboratory", "Equipment", "Practical", "Allocation", "Maintenance", "Consumable"],
    quickActions: ["Book laboratory", "Allocate equipment", "Report fault", "Update consumables"],
    helpText: "Coordinate laboratories, practical schedules, equipment and consumables.",
  };
  if (includesAny(value, ["maintenance", "work-order", "repair", "building", "classroom", "furniture", "electrical", "technician"])) return {
    area: "Maintenance & Infrastructure", recordName: "maintenance request", referenceLabel: "Request / Work Order ID",
    categoryLabel: "Service area", metricLabel: "Progress / Cost", primaryAction: "Create Maintenance Request",
    statuses: ["SUBMITTED", "ASSIGNED", "IN_PROGRESS", "COMPLETED", "VERIFIED", "CLOSED"],
    categories: ["Building", "Room", "Classroom", "Laboratory", "Furniture", "Electrical", "IT Equipment", "Repair"],
    quickActions: ["Report complaint", "Assign technician", "Start work order", "Verify repair"],
    helpText: "Track the complete complaint, assignment, repair, verification and closure workflow.",
  };
  if (includesAny(value, ["inventory", "procurement", "vendor", "purchase", "quotation", "goods", "asset", "stock"])) return {
    area: "Inventory & Procurement", recordName: "procurement record", referenceLabel: "Request / Asset ID",
    categoryLabel: "Procurement stage", metricLabel: "Amount / Quantity", primaryAction: "Create Request",
    statuses: ["DRAFT", "SUBMITTED", "APPROVED", "ORDERED", "RECEIVED", "REJECTED"],
    categories: ["Inventory", "Vendor", "Purchase Request", "Quotation", "Purchase Order", "Goods Received", "Asset"],
    quickActions: ["Raise request", "Compare quotations", "Create purchase order", "Receive goods"],
    helpText: "Track stock and the complete approved purchasing lifecycle.",
  };
  if (includesAny(value, ["fee", "salary", "expense", "income", "scholarship", "refund", "invoice", "receipt", "budget", "finance", "donation"])) return {
    area: "Finance", recordName: "financial record", referenceLabel: "Invoice / Receipt No.",
    categoryLabel: "Transaction type", metricLabel: "Amount", primaryAction: "Add Financial Record",
    statuses: ["DUE", "PENDING", "PAID", "APPROVED", "REFUNDED", "OVERDUE"],
    categories: ["Fee", "Salary", "Expense", "Income", "Scholarship", "Refund", "Invoice", "Budget"],
    quickActions: ["Create invoice", "Record payment", "Process refund", "Review budget"],
    helpText: "Manage authorized financial records, payments, balances and audit history.",
  };
  if (includesAny(value, ["exam", "mark", "result", "assignment", "academic", "attendance", "timetable", "class", "learning", "student performance", "mentoring", "research"])) return {
    area: "Academics", recordName: "academic item", referenceLabel: "Course / Subject Code",
    categoryLabel: "Academic type", metricLabel: "Marks / Attendance", primaryAction: "Add Academic Item",
    statuses: ["UPCOMING", "ACTIVE", "SUBMITTED", "PUBLISHED", "COMPLETED", "LATE"],
    categories: ["Attendance", "Assignment", "Examination", "Result", "Timetable", "Class", "Research"],
    quickActions: ["Record attendance", "Create assignment", "Schedule examination", "Publish result"],
    helpText: "See schedules, submissions, attendance, assessment and academic progress.",
  };
  if (includesAny(value, ["user", "authentication", "device", "system", "integration", "backup", "log", "security", "permission", "access"])) return {
    area: "IT & Security", recordName: "system record", referenceLabel: "User / Device / Event ID",
    categoryLabel: "System area", metricLabel: "Risk / Count", primaryAction: "Add System Record",
    statuses: ["HEALTHY", "ACTIVE", "WARNING", "BLOCKED", "OFFLINE", "RESOLVED"],
    categories: ["User", "Role", "Device", "Integration", "Backup", "Security Event", "Audit Log"],
    quickActions: ["Create user", "Review access", "Register device", "Run backup"],
    helpText: "Operate identities, devices, integrations, backups and security controls.",
  };
  if (includesAny(value, ["alumni", "network", "mentorship", "referral"])) return {
    area: "Alumni Relations", recordName: "alumni record", referenceLabel: "Alumni / Event ID",
    categoryLabel: "Engagement type", metricLabel: "Members / Amount", primaryAction: "Add Alumni Record",
    statuses: ["ACTIVE", "INVITED", "REGISTERED", "MATCHED", "COMPLETED"],
    categories: ["Profile", "Networking", "Mentorship", "Event", "Referral", "Internship", "Donation"],
    quickActions: ["Update profile", "Create mentorship", "Publish event", "Share referral"],
    helpText: "Support alumni networking, mentoring, opportunities and engagement.",
  };
  if (includesAny(value, ["team", "approval", "workload", "department", "people", "manager", "planning"])) return {
    area: "People & Management", recordName: "management item", referenceLabel: "Team / Request ID",
    categoryLabel: "Management type", metricLabel: "Progress / Capacity", primaryAction: "Add Management Item",
    statuses: ["PLANNED", "PENDING", "IN_PROGRESS", "APPROVED", "COMPLETED", "BLOCKED"],
    categories: ["Team", "Approval", "Workload", "Department Plan", "Goal", "Meeting", "Report"],
    quickActions: ["Assign owner", "Review approval", "Balance workload", "Create plan"],
    helpText: "Coordinate people, approvals, workload, plans and delivery.",
  };
  return {
    area: "Operations", recordName: "record", referenceLabel: "Reference ID",
    categoryLabel: "Record type", metricLabel: "Value / Progress", primaryAction: `Add ${item.label}`,
    statuses: ["ACTIVE", "PENDING", "IN_PROGRESS", "COMPLETED", "CANCELLED"],
    categories: [item.label, "Request", "Update", "Report", "Alert"],
    quickActions: ["Create record", "Assign owner", "Review status", "Open report"],
    helpText: item.detail,
  };
}

export function modulePermissions(persona: PersonaKey, slug: string) {
  if (persona === "ADMINISTRATOR" || persona === "SUPER_ADMIN") {
    return { canCreate: true, canUpdate: true, canArchive: true, canUpload: true };
  }
  if (persona === "PARENT") {
    const interactive = ["parent-communication"];
    return { canCreate: interactive.includes(slug), canUpdate: false, canArchive: false, canUpload: false };
  }
  if (persona === "STUDENT") {
    const readOnly = ["student-attendance", "exams-results", "fees", "transport"];
    const canWrite = !readOnly.includes(slug);
    return { canCreate: canWrite, canUpdate: canWrite, canArchive: canWrite, canUpload: ["assignments", "career-planning", "hostel", "placements"].includes(slug) };
  }
  if (persona === "WORKER" || persona === "ALUMNI") {
    return { canCreate: true, canUpdate: true, canArchive: true, canUpload: true };
  }
  return { canCreate: true, canUpdate: true, canArchive: true, canUpload: true };
}