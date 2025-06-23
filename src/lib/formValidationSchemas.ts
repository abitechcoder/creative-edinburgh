import { z } from "zod";

export const directorySchema = z.object({
  id: z.string().optional(),
  email: z.string().email({ message: "Invalid email address!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  name: z.string().min(1, { message: "Business name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  operatingSince: z.coerce.date({ message: "Operating since is required!" }),
  sex: z.enum(["Male", "Female"], { message: "Sex is required!" }),
  ownerAge: z.string({ message: "Age is required!" }),
  revenue: z.string().optional(),
  coreProductOrService: z.string().min(1, { message: "required!" }),
  description: z.string().min(1, { message: "required!" }),
  secrtorId: z.string({ message: "Sector is required!" }),

  img: z.string().optional(),
});

export type DirectorySchema = z.infer<typeof directorySchema>;

export const socialSchema = z.object({
  businessId: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
  youtube: z.string().optional(),
});

export type SocialSchema = z.infer<typeof socialSchema>;

export const workForceSchema = z.object({
  businessId: z.union([z.string(), z.number()]),
  male: z.coerce.number().min(0, "Male count must be at least 0"),
  female: z.coerce.number().min(0, "Female count must be at least 0"),
});

export type WorkForceSchemaSchema = z.infer<typeof workForceSchema>;
