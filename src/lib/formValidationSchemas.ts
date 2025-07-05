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
  userId: z.string().optional(),
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

export const sectorSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Sector name is required!" }),
});

export type SectorSchema = z.infer<typeof sectorSchema>;

export const userSchema = z.object({
  id: z.string().optional(),
  email: z.string().email({ message: "Invalid email address!" }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  role: z.enum(["admin", "cha", "partner"], { message: "Role is required!" }),
  address: z.string().optional(),
  img: z.string().optional(),
  sex: z.enum(["Male", "Female"]).optional(),
  birthday: z.coerce.date().optional(),
  phone: z.string().optional(),
});

export type UserSchema = z.infer<typeof userSchema>;

export const eventSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  startTime: z.string().min(1),
  endTime: z.string().min(1),
  sectorId: z.string().optional(),
});

export type EventSchema = z.infer<typeof eventSchema>;

export const announcementSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  sectorId: z.string().optional(),
  businessId: z.string().optional(),
});

export type AnnouncementSchema = z.infer<typeof announcementSchema>;

export const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required!" }),
  description: z.string().min(1, { message: "Description required!" }),
  businessId: z.coerce.number(),
  category: z.enum(["Service", "Product"], {
    message: "category is required!",
  }),
  price: z.coerce.number().optional(),
  img: z.string().optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
