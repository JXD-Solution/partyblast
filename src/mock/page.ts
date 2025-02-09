import { EventData } from "@/features/create-package";
export const mockRow: EventData[] = [
  {
    id: "1",
    emailSubject: "Birthday Party",
    customerName: "John Doe",
    description: "A fun birthday celebration.",
    packageType: "Premium",
    guestEmailList: ["john@example.com", "jane@example.com"],
    file: null,
    dateTime: "2025-02-10T18:00:00",
    place: "John's House",
    guestEmail: "john.doe@example.com",
  },
  {
    id: "2",
    emailSubject: "Wedding Ceremony",
    customerName: "Sarah Smith",
    description: "A beautiful wedding ceremony.",
    packageType: "Deluxe",
    guestEmailList: ["sarah@example.com", "tom@example.com"],
    file: null,
    dateTime: "2025-03-15T16:00:00",
    place: "City Hall",
    guestEmail: "sarah.smith@example.com",
  },
  {
    id: "3",
    emailSubject: "Conference on AI",
    customerName: "Michael Brown",
    description: "A conference to discuss advancements in AI.",
    packageType: "Standard",
    guestEmailList: ["mike@example.com", "anna@example.com"],
    file: null,
    dateTime: "2025-04-05T09:00:00",
    place: "Tech Conference Center",
    guestEmail: "michael.brown@example.com",
  },
  {
    id: "4",
    emailSubject: "Music Concert",
    customerName: "Emily Davis",
    description: "A rock music concert.",
    packageType: "VIP",
    guestEmailList: ["emily@example.com", "alex@example.com"],
    file: null,
    dateTime: "2025-05-20T20:00:00",
    place: "Arena Stadium",
    guestEmail: "emily.davis@example.com",
  },
  {
    id: "5",
    emailSubject: "Yoga Retreat",
    customerName: "Jessica Wilson",
    description: "A weekend retreat for relaxation and yoga.",
    packageType: "Basic",
    guestEmailList: ["jessica@example.com", "ryan@example.com"],
    file: null,
    dateTime: "2025-06-10T07:00:00",
    place: "Mountain Resort",
    guestEmail: "jessica.wilson@example.com",
  },
  {
    id: "6",
    emailSubject: "Team Building Event",
    customerName: "David Lee",
    description: "Corporate team-building activities.",
    packageType: "Corporate",
    guestEmailList: ["david@example.com", "lily@example.com"],
    file: null,
    dateTime: "2025-07-15T10:00:00",
    place: "Lakeview Conference Center",
    guestEmail: "david.lee@example.com",
  },
  {
    id: "7",
    emailSubject: "Charity Fundraiser",
    customerName: "Olivia Harris",
    description: "A fundraiser to support local charities.",
    packageType: "Premium",
    guestEmailList: ["olivia@example.com", "max@example.com"],
    file: null,
    dateTime: "2025-08-01T17:00:00",
    place: "Grand Ballroom",
    guestEmail: "olivia.harris@example.com",
  },
  {
    id: "8",
    emailSubject: "Fashion Show",
    customerName: "Sophia Martin",
    description: "An exclusive fashion show featuring new designers.",
    packageType: "VIP",
    guestEmailList: ["sophia@example.com", "lena@example.com"],
    file: null,
    dateTime: "2025-09-12T19:00:00",
    place: "Fashion District",
    guestEmail: "sophia.martin@example.com",
  },
  {
    id: "9",
    emailSubject: "Product Launch",
    customerName: "Lucas Clark",
    description: "Launch of the new tech product.",
    packageType: "Standard",
    guestEmailList: ["lucas@example.com", "maria@example.com"],
    file: null,
    dateTime: "2025-10-18T14:00:00",
    place: "Tech Expo",
    guestEmail: "lucas.clark@example.com",
  },
  {
    id: "10",
    emailSubject: "Wedding Anniversary",
    customerName: "Mark Thompson",
    description: "A romantic celebration of 10 years of marriage.",
    packageType: "Deluxe",
    guestEmailList: ["mark@example.com", "anna@example.com"],
    file: null,
    dateTime: "2025-11-22T18:30:00",
    place: "Lakeview Hotel",
    guestEmail: "mark.thompson@example.com",
  },
  {
    id: "11",
    emailSubject: "Product Photography Workshop",
    customerName: "Nina Scott",
    description: "A workshop on product photography for beginners.",
    packageType: "Basic",
    guestEmailList: ["nina@example.com", "paul@example.com"],
    file: null,
    dateTime: "2025-12-03T09:00:00",
    place: "Studio X",
    guestEmail: "nina.scott@example.com",
  },
  {
    id: "12",
    emailSubject: "Cooking Class",
    customerName: "Jack White",
    description: "A hands-on cooking class with a professional chef.",
    packageType: "Premium",
    guestEmailList: ["jack@example.com", "katie@example.com"],
    file: null,
    dateTime: "2025-12-15T11:00:00",
    place: "Culinary Arts Center",
    guestEmail: "jack.white@example.com",
  },
  {
    id: "13",
    emailSubject: "Photography Exhibition",
    customerName: "Grace Evans",
    description: "An exhibition showcasing photography works.",
    packageType: "Standard",
    guestEmailList: ["grace@example.com", "ben@example.com"],
    file: null,
    dateTime: "2025-01-05T16:00:00",
    place: "Art Gallery",
    guestEmail: "grace.evans@example.com",
  },
  {
    id: "14",
    emailSubject: "Outdoor Adventure",
    customerName: "Matthew King",
    description: "An exciting day of hiking and outdoor activities.",
    packageType: "Basic",
    guestEmailList: ["matthew@example.com", "susan@example.com"],
    file: null,
    dateTime: "2025-02-18T08:00:00",
    place: "Mountain Trail",
    guestEmail: "matthew.king@example.com",
  },
  {
    id: "15",
    emailSubject: "Networking Event",
    customerName: "Rachel Moore",
    description: "An event to help professionals connect.",
    packageType: "VIP",
    guestEmailList: ["rachel@example.com", "daniel@example.com"],
    file: null,
    dateTime: "2025-03-01T09:30:00",
    place: "Business Center",
    guestEmail: "rachel.moore@example.com",
  },
];

export const mockColumns = [
  { label: "Customer Name", key: "customerName", hidden: false },
  { label: "Package Type", key: "packageType", hidden: false },
  { label: "Date & Time", key: "dateTime", hidden: false },
];
