import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const submit = mutation({
  args: {
    source: v.union(v.literal("demo"), v.literal("contact")),
    fullName: v.string(),
    companyName: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    designation: v.optional(v.string()),
    productSlug: v.optional(v.string()),
    businessType: v.optional(v.string()),
    numberOfLocations: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      ...args,
      createdAtIso: new Date().toISOString(),
    });
    return null;
  },
});
