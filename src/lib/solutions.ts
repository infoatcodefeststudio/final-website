import {
  Truck,
  Warehouse,
  Network,
  Factory,
  ShoppingBag,
  BedDouble,
  Boxes,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  relatedProductSlugs: string[];
};

export const solutions: Solution[] = [
  {
    slug: "logistics-transportation",
    name: "Logistics & Transportation",
    description:
      "Plan routes, manage fleets and track deliveries with complete visibility across your transportation network.",
    icon: Truck,
    relatedProductSlugs: ["tms", "gate-yard-management"],
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    description:
      "Digitize inward, storage, picking and dispatch operations for warehouses and distribution centers.",
    icon: Warehouse,
    relatedProductSlugs: ["wms", "gate-yard-management"],
  },
  {
    slug: "supply-chain",
    name: "Supply Chain",
    description:
      "Connect vendors, warehouses and transportation into one coordinated, data-driven supply chain.",
    icon: Network,
    relatedProductSlugs: ["vendor-management", "inventory-management", "tms"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description:
      "Track raw material inward, consumption and stock movement to keep production running smoothly.",
    icon: Factory,
    relatedProductSlugs: ["inventory-management", "wms"],
  },
  {
    slug: "retail",
    name: "Retail",
    description:
      "Manage multi-location inventory, purchasing and stock transfers across your retail network.",
    icon: ShoppingBag,
    relatedProductSlugs: ["inventory-management", "wms"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    description:
      "Run front office, billing, housekeeping and food ordering from one connected hotel platform.",
    icon: BedDouble,
    relatedProductSlugs: ["hotel-erp"],
  },
  {
    slug: "distribution",
    name: "Distribution",
    description:
      "Coordinate warehousing, transportation and vendor operations for efficient distribution at scale.",
    icon: Boxes,
    relatedProductSlugs: ["wms", "tms", "vendor-management"],
  },
  {
    slug: "enterprise-operations",
    name: "Enterprise Operations",
    description:
      "Give leadership real-time visibility and control across every operational function in the business.",
    icon: Building2,
    relatedProductSlugs: ["vendor-management", "inventory-management"],
  },
];
