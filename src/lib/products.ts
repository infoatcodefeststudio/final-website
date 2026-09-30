import {
  BedDouble,
  Boxes,
  DoorOpen,
  Handshake,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  headline: string;
  description: string;
  cardDescription: string;
  primaryUse: string;
  bestFor: string;
  keyModules: string[];
  features: string[];
  benefits: string[];
  useCases: { title: string; description: string }[];
  whyThis: { title: string; description: string }[];
  workflow: string[];
  dashboard: {
    title: string;
    stats: { label: string; value: string }[];
    columns: string[];
  };
  screenshots?: { url: string; caption: string }[];
  faqs: ProductFaq[];
  seoTitle: string;
  seoDescription: string;
};

export const products: Product[] = [
  {
    slug: "wms",
    name: "Warehouse Management System",
    shortName: "WMS",
    icon: Warehouse,
    tagline: "Complete Visibility Across Your Warehouse Operations",
    headline: "Complete Visibility Across Your Warehouse Operations",
    description:
      "Digitize and manage your complete warehouse operation from inward to storage, inventory movement, picking, packing, dispatch and reporting.",
    cardDescription:
      "Digitize inward, storage, picking, packing and dispatch with real-time inventory visibility.",
    primaryUse: "Warehouse operations & inventory control",
    bestFor: "Warehouses, 3PLs & distribution centers",
    keyModules: [
      "Inward & GRN",
      "Putaway & Bin Management",
      "Picking & Packing",
      "Dispatch",
    ],
    features: [
      "Warehouse Master",
      "Multi-Warehouse Management",
      "Inward Management",
      "GRN Management",
      "Putaway Management",
      "Bin Management",
      "Inventory Tracking",
      "Stock Movement",
      "Picking & Packing",
      "Dispatch Management",
      "Barcode / QR Code Support",
      "Batch & Lot Management",
      "Stock Adjustment",
      "Cycle Counting",
      "Warehouse User Management",
      "Dashboard & MIS",
      "Real-Time Inventory Visibility",
      "Role-Based Access",
      "Reports & Analytics",
    ],
    benefits: [
      "Reduce manual processes",
      "Improve inventory accuracy",
      "Increase warehouse productivity",
      "Real-time stock visibility",
      "Reduce operational errors",
      "Improve order fulfillment",
      "Better management reporting",
    ],
    useCases: [
      {
        title: "Multi-warehouse retail distribution",
        description:
          "Coordinate inventory across multiple warehouse locations with centralized visibility and stock transfers.",
      },
      {
        title: "3PL and contract warehousing",
        description:
          "Manage client-wise storage, billing-ready movement records and picking accuracy for third-party logistics operations.",
      },
      {
        title: "Manufacturing raw material stores",
        description:
          "Track raw material inward, batch/lot traceability and consumption against production requirements.",
      },
    ],
    whyThis: [
      {
        title: "Built for real warehouse workflows",
        description:
          "Modules mirror how inward, storage and dispatch actually happen on the floor, not a generic form builder.",
      },
      {
        title: "Barcode and batch ready",
        description:
          "Barcode/QR scanning and batch & lot tracking are core to the product, not bolt-on add-ons.",
      },
      {
        title: "Configurable to your layout",
        description:
          "Bin, zone and multi-warehouse structures can be configured to match your existing facility design.",
      },
    ],
    workflow: [
      "Inward & GRN",
      "Putaway",
      "Storage & Bin Allocation",
      "Order Picking",
      "Packing",
      "Dispatch",
      "Reporting",
    ],
    dashboard: {
      title: "Warehouse Operations Dashboard",
      stats: [
        { label: "Inventory Accuracy", value: "98.6%" },
        { label: "Open Inbound Orders", value: "42" },
        { label: "Pending Picks", value: "128" },
        { label: "Dispatch Today", value: "76" },
      ],
      columns: ["Inventory", "Inbound", "Outbound", "Picking", "Stock", "Orders"],
    },
    screenshots: [
      {
        url: "/images/screenshots/file_dG6gYLngHM3bkOhcunob30Gf.png",
        caption: "Warehouse modules — dashboard, operations, inventory, master data, reports and system administration",
      },
      {
        url: "/images/screenshots/file_eEEP5Jo2e1LU1nInY850ihnB.png",
        caption: "Cold storage warehouse capacity and real-time chamber temperature monitoring",
      },
      {
        url: "/images/screenshots/file_48TbiemRj9ABViFxFy6KBkS2.png",
        caption: "Inbound and outbound operations — ASN, GRN, putaway, orders, picking and shipments",
      },
      {
        url: "/images/screenshots/file_gzcjyja1fCk6KkbxQyDjozvu.png",
        caption: "Inventory dashboard with stock levels, quarantine, low stock and expiry alerts",
      },
    ],
    faqs: [],
    seoTitle: "Warehouse Management System (WMS) | Codefest Studio",
    seoDescription:
      "Digitize inward, storage, picking, packing and dispatch with Codefest Studio's Warehouse Management System. Real-time inventory visibility for warehouses and 3PLs.",
  },
  {
    slug: "tms",
    name: "Transport Management System",
    shortName: "TMS",
    icon: Truck,
    tagline: "Smarter Transportation. Complete Delivery Visibility.",
    headline: "Smarter Transportation. Complete Delivery Visibility.",
    description:
      "Manage transportation operations from order creation and vehicle allocation to route planning, dispatch, live tracking and proof of delivery.",
    cardDescription:
      "Plan routes, allocate vehicles and drivers, and track deliveries with proof of delivery in real time.",
    primaryUse: "Fleet, route & delivery management",
    bestFor: "Logistics, distribution & delivery fleets",
    keyModules: [
      "Trip & Vehicle Allocation",
      "Route Planning",
      "Live Tracking",
      "POD Management",
    ],
    features: [
      "Transport Order Creation",
      "Trip Management",
      "Vehicle Master",
      "Driver Master",
      "Driver Attendance",
      "Vehicle Allocation",
      "Driver Allocation",
      "Route Planning",
      "AI-Assisted Route Planning",
      "Dispatch Management",
      "Live Vehicle Tracking",
      "Delivery Tracking",
      "POD Management",
      "Delivery Status",
      "Fuel Management",
      "Trip Expense Management",
      "Vendor Management",
      "Cost Tracking",
      "SLA Monitoring",
      "MIS & Analytics",
    ],
    benefits: [
      "Improve fleet utilization",
      "Reduce transportation costs",
      "Increase delivery visibility",
      "Improve route efficiency",
      "Faster POD collection",
      "Better customer experience",
      "Real-time operational control",
    ],
    useCases: [
      {
        title: "Last-mile delivery fleets",
        description:
          "Allocate drivers and vehicles, plan efficient routes and track delivery status in real time.",
      },
      {
        title: "Inter-city freight movement",
        description:
          "Manage long-haul trips, driver attendance, fuel and trip expenses with complete cost visibility.",
      },
      {
        title: "Outsourced transport vendors",
        description:
          "Track vendor-operated vehicles, SLA adherence and costs alongside your own fleet.",
      },
    ],
    whyThis: [
      {
        title: "End-to-end trip lifecycle",
        description:
          "From order creation to POD collection, every stage of a trip is tracked in one platform.",
      },
      {
        title: "Cost and SLA visibility",
        description:
          "Trip expenses, fuel and SLA monitoring give management real-time control over transportation costs.",
      },
      {
        title: "Built for scale",
        description:
          "Designed to support growing fleets across multiple routes, vendors and geographies.",
      },
    ],
    workflow: [
      "Order Creation",
      "Vehicle & Driver Allocation",
      "Route Planning",
      "Dispatch",
      "Live Tracking",
      "Delivery & POD",
      "Reporting",
    ],
    dashboard: {
      title: "Transport Operations Dashboard",
      stats: [
        { label: "Active Trips", value: "58" },
        { label: "Vehicles On Route", value: "34" },
        { label: "On-Time Delivery", value: "94.2%" },
        { label: "PODs Collected Today", value: "212" },
      ],
      columns: ["Trips", "Vehicles", "Drivers", "Live Tracking", "Deliveries", "POD"],
    },
    screenshots: [
      {
        url: "/images/screenshots/file_uthRuHB9Vhnidzpd4yAm5lj4.png",
        caption: "Ops command center — active trips, revenue, on-road vehicles and live fleet tracking map",
      },
      {
        url: "/images/screenshots/file_2a4cGaleAnokorzB5f6xzMu0.png",
        caption: "Connected apps launcher — operations, bookings, trips, live tracking, fleet, finance and reports",
      },
      {
        url: "/images/screenshots/file_1wrrwOSqEZrz551mlJi4Awic.png",
        caption: "Freight booking register with status mix, active freight value and trip assignment status",
      },
      {
        url: "/images/screenshots/file_Qs1vYaDSlt9xnzXi3AUmn08Q.png",
        caption: "Live fleet tracker showing moving, idle, halted and offline vehicles with reefer temperature and speed",
      },
      {
        url: "/images/screenshots/file_GE5K12k3cXxCGbvlUk858rhK.png",
        caption: "Vehicle register with fleet status, ownership mix, depot spread and compliance queue",
      },
    ],
    faqs: [],
    seoTitle: "Transport Management System (TMS) | Codefest Studio",
    seoDescription:
      "Plan routes, allocate fleets and track deliveries with proof of delivery using Codefest Studio's Transport Management System.",
  },
  {
    slug: "gate-yard-management",
    name: "Gate / Yard Management System",
    shortName: "Gate/Yard Management",
    icon: DoorOpen,
    tagline: "Digitize Every Movement at Your Gate and Yard",
    headline: "Digitize Every Movement at Your Gate and Yard",
    description:
      "Manage vehicle entry, exit, yard movements, dock allocation and gate operations through one centralized platform.",
    cardDescription:
      "Centralize vehicle entry, exit, dock allocation and yard movement visibility.",
    primaryUse: "Gate entry, yard & dock operations",
    bestFor: "Warehouses, plants & distribution yards",
    keyModules: [
      "Gate Entry & Exit",
      "Dock Allocation",
      "Yard Visibility",
      "Appointment Management",
    ],
    features: [
      "Vehicle Gate Entry",
      "Gate Pass Management",
      "Driver Verification",
      "Vehicle Verification",
      "Inward Vehicle Management",
      "Outward Vehicle Management",
      "Appointment Management",
      "Dock Management",
      "Yard Management",
      "Vehicle Queue Management",
      "Loading / Unloading Status",
      "Security Checklists",
      "Document Verification",
      "Gate Exit",
      "Real-Time Yard Visibility",
      "Dashboard & Reports",
    ],
    benefits: [
      "Reduce gate congestion",
      "Faster vehicle processing",
      "Improve yard utilization",
      "Increase security",
      "Reduce waiting time",
      "Complete movement visibility",
    ],
    useCases: [
      {
        title: "High-volume plant gates",
        description:
          "Process large volumes of inbound and outbound vehicles quickly with digital verification and queueing.",
      },
      {
        title: "Dock scheduling for warehouses",
        description:
          "Reduce dock congestion with appointment-based scheduling and real-time dock status.",
      },
      {
        title: "Security and compliance tracking",
        description:
          "Maintain digital records of driver and vehicle verification, checklists and document compliance.",
      },
    ],
    whyThis: [
      {
        title: "Purpose-built for gate operations",
        description:
          "Covers the full sequence of entry, verification, yard movement, loading and exit.",
      },
      {
        title: "Reduces congestion and wait time",
        description:
          "Queue management and appointment scheduling smooth out peak-hour vehicle volumes.",
      },
      {
        title: "Complete audit trail",
        description:
          "Every vehicle movement, verification and checklist is digitally recorded for accountability.",
      },
    ],
    workflow: [
      "Appointment Booking",
      "Gate Entry & Verification",
      "Yard Movement",
      "Dock Allocation",
      "Loading / Unloading",
      "Gate Exit",
      "Reporting",
    ],
    dashboard: {
      title: "Gate & Yard Operations Dashboard",
      stats: [
        { label: "Vehicles Waiting", value: "17" },
        { label: "Vehicles Inside", value: "29" },
        { label: "Docks Occupied", value: "8 / 12" },
        { label: "Avg. Gate Time", value: "14 min" },
      ],
      columns: [
        "Vehicles Waiting",
        "Vehicles Inside",
        "Dock Status",
        "Yard Occupancy",
        "Gate In/Out",
      ],
    },
    screenshots: [
      {
        url: "/images/screenshots/file_KaMdVL0PPlZI6Hs0j1sa8wNx.png",
        caption: "Live dashboard with on-site, on-yard, at-dock and dock utilization across inward/outward parking and loading docks",
      },
      {
        url: "/images/screenshots/file_saA7Px28MLP1LxRyGVzmSZgz.png",
        caption: "Inward and outward parking queues with exit bay tracking and real-time loading dock status",
      },
      {
        url: "/images/screenshots/file_V3FmGzbtf58GRo3kdaxBNUeG.png",
        caption: "Yard performance analytics — check-ins, check-outs, turnaround time and daily throughput trends",
      },
      {
        url: "/images/screenshots/file_n08M9tFkJETqgdI71cebd8em.png",
        caption: "TAT breakdown, loading vs unloading time and top customer, transporter and dock utilization rankings",
      },
    ],
    faqs: [],
    seoTitle: "Gate & Yard Management System | Codefest Studio",
    seoDescription:
      "Digitize vehicle entry, exit, dock allocation and yard movement with Codefest Studio's Gate / Yard Management System.",
  },
  {
    slug: "vendor-management",
    name: "Vendor Management System",
    shortName: "VMS",
    icon: Handshake,
    tagline: "Manage Your Complete Vendor Lifecycle",
    headline: "Manage Your Complete Vendor Lifecycle",
    description:
      "Centralize vendor onboarding, documentation, compliance, performance and commercial information in one powerful platform.",
    cardDescription:
      "Centralize onboarding, compliance, contracts and performance for every vendor.",
    primaryUse: "Vendor onboarding, compliance & performance",
    bestFor: "Enterprises with multi-vendor operations",
    keyModules: [
      "Onboarding & KYC",
      "Contracts & Rate Cards",
      "Performance Scorecards",
      "Billing & Payments",
    ],
    features: [
      "Vendor Registration",
      "Vendor Onboarding",
      "Vendor Master",
      "KYC & Document Management",
      "Compliance Tracking",
      "Contract Management",
      "Rate Card Management",
      "Service Management",
      "Vendor Allocation",
      "Vendor Performance",
      "SLA Monitoring",
      "Vendor Billing",
      "Payment Tracking",
      "Debit / Credit Tracking",
      "Vendor Scorecard",
      "Reports & Analytics",
    ],
    benefits: [
      "Faster vendor onboarding",
      "Centralized vendor data",
      "Better compliance visibility",
      "Improved vendor performance",
      "Simplified documentation",
      "Better commercial control",
    ],
    useCases: [
      {
        title: "Multi-vendor logistics networks",
        description:
          "Onboard and manage transport, warehousing and service vendors with a single source of truth.",
      },
      {
        title: "Compliance-heavy industries",
        description:
          "Track KYC documentation, certifications and compliance expiry across your vendor base.",
      },
      {
        title: "Procurement & sourcing teams",
        description:
          "Manage rate cards, contracts and vendor scorecards to drive better sourcing decisions.",
      },
    ],
    whyThis: [
      {
        title: "One record per vendor",
        description:
          "Documentation, contracts, performance and billing data live together, not across spreadsheets.",
      },
      {
        title: "Performance-driven",
        description:
          "Scorecards and SLA monitoring make it easy to identify top and underperforming vendors.",
      },
      {
        title: "Reduces onboarding time",
        description:
          "Structured onboarding workflows shorten the time to activate a new vendor.",
      },
    ],
    workflow: [
      "Vendor Registration",
      "KYC & Onboarding",
      "Contract & Rate Card Setup",
      "Vendor Allocation",
      "Performance Tracking",
      "Billing & Payment",
    ],
    dashboard: {
      title: "Vendor Management Dashboard",
      stats: [
        { label: "Active Vendors", value: "184" },
        { label: "Compliance Rate", value: "96.4%" },
        { label: "Avg. Scorecard", value: "4.3 / 5" },
        { label: "Pending Payments", value: "12" },
      ],
      columns: ["Active Vendors", "Compliance", "Performance", "Contracts", "Payments"],
    },
    screenshots: [
      {
        url: "/images/screenshots/file_i8d7a56NtJ2H9spuH6C7HVfn.png",
        caption: "Operational analytics — total invoices, gross amount, active partners and monthly billing trends",
      },
      {
        url: "/images/screenshots/file_cEjV7AAvZ5VZlu96cX4GzbaP.png",
        caption: "Vendor directory with GST compliance, state coverage, hub association and searchable vendor cards",
      },
      {
        url: "/images/screenshots/file_uQXue0ejYlPmotPWmY7H7pVm.png",
        caption: "Agreement management — contract status, expiration timeline and urgent renewal alerts",
      },
      {
        url: "/images/screenshots/file_aaZy18a63SWP5q2nNmdKkD3V.png",
        caption: "KYC verification workflow with tax IDs, banking details and document status per vendor",
      },
    ],
    faqs: [],
    seoTitle: "Vendor Management System (VMS) | Codefest Studio",
    seoDescription:
      "Centralize vendor onboarding, compliance, contracts and performance with Codefest Studio's Vendor Management System.",
  },
  {
    slug: "hotel-erp",
    name: "Hotel ERP",
    shortName: "Hotel ERP",
    icon: BedDouble,
    tagline: "One Platform to Run Your Hotel Operations",
    headline: "One Platform to Run Your Hotel Operations",
    description:
      "Manage hotel operations, guest stays, billing, inventory, housekeeping, food ordering and kitchen operations through one integrated platform.",
    cardDescription:
      "Run front office, billing, housekeeping and food ordering from one integrated platform.",
    primaryUse: "Hotel front office, billing & F&B operations",
    bestFor: "Hotels, resorts & hospitality groups",
    keyModules: [
      "Front Office & Check-In",
      "Room & GST Billing",
      "Housekeeping",
      "QR Food Ordering",
    ],
    features: [
      "Front Office Management",
      "Individual Check-In",
      "Corporate Check-In",
      "Room Management",
      "Room Availability",
      "Guest Management",
      "GST Billing",
      "Room Billing",
      "Food Billing",
      "Advance Payment",
      "Check-Out",
      "Housekeeping Management",
      "Inventory Management",
      "Kitchen Management",
      "Food Ordering",
      "Room Service",
      "QR-Based Food Menu",
      "Order Tracking",
      "Kitchen Order Status",
      "Guest Order Tracking",
      "Reports & Analytics",
    ],
    benefits: [
      "Faster check-in and check-out",
      "Accurate GST-compliant billing",
      "Improved housekeeping coordination",
      "Faster food order turnaround",
      "Better guest experience",
      "Real-time occupancy visibility",
    ],
    useCases: [
      {
        title: "Boutique and mid-scale hotels",
        description:
          "Run front office, billing and housekeeping from a single system without heavy IT overhead.",
      },
      {
        title: "Resorts with in-room dining",
        description:
          "Enable QR-based food ordering with live kitchen order tracking for room service.",
      },
      {
        title: "Multi-property hotel groups",
        description:
          "Standardize check-in, billing and reporting workflows across multiple properties.",
      },
    ],
    whyThis: [
      {
        title: "Front office to kitchen, connected",
        description:
          "Guest stays, billing and food ordering share the same guest and room data, reducing manual reconciliation.",
      },
      {
        title: "GST-ready billing",
        description:
          "Room and food billing are structured for GST compliance out of the box.",
      },
      {
        title: "Modern guest experience",
        description:
          "QR-based menus and order tracking give guests a contactless, self-service ordering experience.",
      },
    ],
    workflow: [
      "Guest",
      "QR Scan",
      "Food Menu",
      "Order",
      "Kitchen",
      "Preparation",
      "Room Service",
      "Delivered",
    ],
    dashboard: {
      title: "Hotel Operations Dashboard",
      stats: [
        { label: "Occupancy", value: "82%" },
        { label: "Check-Ins Today", value: "24" },
        { label: "Active Food Orders", value: "9" },
        { label: "Housekeeping Pending", value: "6" },
      ],
      columns: [
        "Rooms",
        "Occupancy",
        "Bookings",
        "Check-in",
        "Check-out",
        "Food Orders",
        "Housekeeping",
      ],
    },
    screenshots: [
      {
        url: "/images/screenshots/file_5MgQbJFUJ8AfSalURG9G6Eyy.png",
        caption: "Front office reception console with room grid, floor filters and tap-to-check-in status",
      },
      {
        url: "/images/screenshots/file_JPdJulR3yMHFRSjhrdpXGzMB.png",
        caption: "Command center with occupancy, revenue, pending requests, room status mix and recent activity",
      },
      {
        url: "/images/screenshots/file_UJalYM8MCpXyb8sNjG4ea0eH.png",
        caption: "QR-based guest menu with live category browsing that syncs instantly to the guest portal",
      },
    ],
    faqs: [],
    seoTitle: "Hotel ERP System | Codefest Studio",
    seoDescription:
      "Run front office, GST billing, housekeeping and QR-based food ordering with Codefest Studio's Hotel ERP platform.",
  },
  {
    slug: "inventory-management",
    name: "Inventory Management System",
    shortName: "Inventory Management",
    icon: Boxes,
    tagline: "Know What You Have. Where You Have It. When You Need It.",
    headline: "Know What You Have. Where You Have It. When You Need It.",
    description:
      "Manage purchasing, stock, transfers, consumption, dispatch and inventory visibility across multiple locations.",
    cardDescription:
      "Manage purchasing, stock transfers, consumption and multi-location inventory visibility.",
    primaryUse: "Multi-location stock & purchasing control",
    bestFor: "Retail, manufacturing & distribution businesses",
    keyModules: [
      "Purchase Orders & GRN",
      "Stock Transfers",
      "Reorder Levels",
      "Inventory Valuation",
    ],
    features: [
      "Item Master",
      "Category Management",
      "Multi-Location Inventory",
      "Purchase Orders",
      "GRN",
      "Stock Receipt",
      "Stock Transfer",
      "Stock Issue",
      "Stock Adjustment",
      "Stock Consumption",
      "Reorder Level",
      "Minimum / Maximum Stock",
      "Barcode / QR Code",
      "Batch Management",
      "Inventory Valuation",
      "Stock Ledger",
      "Real-Time Stock",
      "Inventory Reports",
      "Dashboard & Analytics",
    ],
    benefits: [
      "Real-time stock visibility",
      "Reduce stock-outs",
      "Reduce excess inventory",
      "Improve purchasing",
      "Improve inventory accuracy",
      "Better business decisions",
    ],
    useCases: [
      {
        title: "Multi-location retail chains",
        description:
          "Track stock levels, transfers and reorder points across every store location.",
      },
      {
        title: "Manufacturing consumption tracking",
        description:
          "Monitor raw material consumption against production and maintain accurate stock ledgers.",
      },
      {
        title: "Distribution and wholesale",
        description:
          "Manage purchase orders, GRN and inventory valuation across warehouses and branches.",
      },
    ],
    whyThis: [
      {
        title: "Purchasing to consumption, in one system",
        description:
          "Purchase orders, GRN, transfers and consumption are tracked together for a complete stock picture.",
      },
      {
        title: "Reorder intelligence",
        description:
          "Minimum/maximum stock and reorder levels help prevent stock-outs and overstocking.",
      },
      {
        title: "Multi-location ready",
        description:
          "Built to manage inventory across many locations from a single, consolidated view.",
      },
    ],
    workflow: [
      "Purchase Order",
      "GRN",
      "Stock Receipt",
      "Storage",
      "Transfer / Issue",
      "Consumption",
      "Reporting",
    ],
    dashboard: {
      title: "Inventory Operations Dashboard",
      stats: [
        { label: "SKUs Tracked", value: "3,240" },
        { label: "Low Stock Alerts", value: "18" },
        { label: "Open Purchase Orders", value: "27" },
        { label: "Stock Accuracy", value: "97.8%" },
      ],
      columns: ["Stock", "Purchase", "GRN", "Transfers", "Consumption", "Low Stock"],
    },
    screenshots: [
      {
        url: "/images/screenshots/file_s8xXeK0tfUrVABXABpFHoTwp.png",
        caption: "Operations dashboard with live KPIs for stock value, low stock, revenue, purchases and pending orders",
      },
      {
        url: "/images/screenshots/file_xXn46ONPn74cbGRgi6u3NmnP.png",
        caption: "Lot-level inventory management with batch tracking, expiry and multi-warehouse stock visibility",
      },
      {
        url: "/images/screenshots/file_X0vM87wbGGOdHZ6QMYat88LU.png",
        caption: "Purchase order workflow tracking requisition through approval, dispatch and GRN receipt",
      },
      {
        url: "/images/screenshots/file_LDj7WuWC7Nz4bX1ztS6CAFw0.png",
        caption: "Warehouse pick list with scan-to-pick, multi-batch FEFO allocation and order progress tracking",
      },
      {
        url: "/images/screenshots/file_JOmISzR2vTfk1fT7K44A0kas.png",
        caption: "Flow analytics showing purchase-to-pay cycle time, bottlenecks and stage-by-stage completion",
      },
      {
        url: "/images/screenshots/file_tz5bP36facwMJxhNiJvR1HTX.png",
        caption: "Barcode system for generating, printing and scanning product barcodes with live label preview",
      },
    ],
    faqs: [],
    seoTitle: "Inventory Management System | Codefest Studio",
    seoDescription:
      "Manage purchasing, stock transfers, consumption and multi-location inventory visibility with Codefest Studio's Inventory Management System.",
  },
];

const sharedFaqs: ProductFaq[] = [
  {
    question: "Can the product be customized?",
    answer:
      "Yes. The product can be configured and extended to match your specific operational workflows, forms and reporting needs.",
  },
  {
    question: "Does the system support multiple locations?",
    answer:
      "Yes. Multi-location and multi-facility setups are supported, with centralized visibility across all locations.",
  },
  {
    question: "Can we integrate the product with our existing ERP?",
    answer:
      "Integration with existing ERP and business systems is possible and is scoped based on your current technology setup.",
  },
  {
    question: "Is the system cloud-based?",
    answer:
      "Yes. The platform is built on modern cloud infrastructure for accessibility, reliability and scalability.",
  },
  {
    question: "Can we create multiple users?",
    answer:
      "Yes. The system supports multiple users with role-based access to control what each user can view or edit.",
  },
  {
    question: "Does it support role-based access?",
    answer:
      "Yes. Access to modules and data can be controlled based on user roles and responsibilities.",
  },
  {
    question: "Can dashboards and reports be customized?",
    answer:
      "Dashboards and reports can be tailored to the metrics and views that matter most to your team.",
  },
  {
    question: "Can APIs be integrated?",
    answer:
      "APIs can be used to connect the platform with other business systems as required by your operations.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation timelines vary based on scope and complexity. Our team will provide an estimate after understanding your requirements.",
  },
  {
    question: "Can we request a product demo?",
    answer:
      "Yes. You can book a personalized demo with our team using the Book a Demo page.",
  },
];

for (const product of products) {
  product.faqs = sharedFaqs;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
