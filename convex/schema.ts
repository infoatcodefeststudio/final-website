import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
  }).index("by_token", ["tokenIdentifier"]),

  leads: defineTable({
    source: v.union(v.literal("demo"), v.literal("contact")),
    createdAtIso: v.string(),
    fullName: v.string(),
    companyName: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    designation: v.optional(v.string()),
    productSlug: v.optional(v.string()),
    businessType: v.optional(v.string()),
    numberOfLocations: v.optional(v.string()),
    message: v.string(),
  }),
});
