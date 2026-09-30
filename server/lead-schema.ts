import { z } from "zod";

export const leadPayloadSchema = z.object({
  source: z.enum(["contact", "demo"]),
  fullName: z.string().trim().min(2),
  companyName: z.string().trim().optional(),
  email: z.string().trim().email(),
  phone: z.string().trim().optional(),
  designation: z.string().trim().optional(),
  productSlug: z.string().trim().optional(),
  businessType: z.string().trim().optional(),
  numberOfLocations: z.string().trim().optional(),
  message: z.string().trim().min(1),
});

export type LeadPayload = z.infer<typeof leadPayloadSchema>;
