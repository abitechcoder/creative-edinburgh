"use server";
import {
  DirectorySchema,
  SectorSchema,
  sectorSchema,
  SocialSchema,
  UserSchema,
  WorkForceSchemaSchema,
} from "./formValidationSchemas";
import prisma from "./prisma";
import { clerkClient } from "@clerk/nextjs/server";

export type CurrentState = {
  success: boolean;
  error: boolean;
  message?: string;
};

export const createDirectory = async (
  currentState: CurrentState,
  data: any
) => {
  try {
    const user: any = await clerkClient.users.createUser({
      username: data.firstName + data.lastName,
      password: "CHA@2025@yadot",
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: [data.email],
      publicMetadata: { role: "member" },
    });

    await prisma.user.create({
      data: {
        id: user.id,
        username: user.username,
        firstname: data.firstName || null,
        lastname: data.lastName || null,
        email: data.email,
        phone: data.phone || null,
        address: data.address || null,
        img: data.img || null,
        sex: data.sex || null,
        birthday: data.birthday ? new Date(data.birthday) : null,
        role: "member",
      },
    });

    await prisma.business.create({
      data: {
        name: data.name,
        ageOfOwner: parseInt(data.ownerAge),
        businessAddress: data.address,
        genderOfOwner: data.sex,
        coreProductOrService: data.coreProductOrService,
        description: data.description,
        revenueBracket: data.revenue + "",
        yearsInOperation: data.operatingSince,
        // sectorId: parseInt(data.secrtorId),

        sector: {
          connect: { id: parseInt(data.secrtorId) },
        },
        user: {
          connect: { id: user.id }, // <- Connect user relation here
        },
        phone: data.phone,
        email: data.email,
        logo: data.img || null,
        disabilityInclusion: "Yes",
        registrationStatus: "Yes",
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false, message: "" };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, mesage: "" };
  }
};

export const updateDirectory = async (
  currentState: CurrentState,
  data: any
) => {
  try {
    let userId = data.userId;

    // 1. Check if Clerk user exists
    let clerkUser;
    try {
      if (userId) {
        clerkUser = await clerkClient.users.getUser(userId);
      }
    } catch (err) {
      // Clerk user does not exist, so create it
      clerkUser = await clerkClient.users.createUser({
        username: data.firstName + data.lastName,
        password: "CHA@2025@yadot",
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: [data.email],
        publicMetadata: { role: "member" },
      });
      userId = clerkUser.id;
    }

    // 2. Check if Prisma user exists

    const existingLocalUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingLocalUser) {
      // Create new user in local database
      await prisma.user.create({
        data: {
          id: clerkUser.id,
          username: clerkUser.username,
          firstname: data.firstName || null,
          lastname: data.lastName || null,
          email: data.email,
          phone: data.phone || null,
          address: data.address || null,
          img: data.img || null,
          sex: data.sex || null,
          birthday: data.birthday ? new Date(data.birthday) : null,
          role: "member",
        },
      });
    } else {
      // Update the existing local user
      console.log(userId, "Updating record");

      await prisma.user.update({
        where: { id: userId },
        data: {
          id: userId,
          firstname: data.firstName || null,
          lastname: data.lastName || null,
          email: data.email,
          phone: data.phone || null,
          address: data.address || null,
          img: data.img || null,
          sex: data.sex || null,
          birthday: data.birthday ? new Date(data.birthday) : null,
        },
      });
    }

    // 3. Update the Business record
    await prisma.business.update({
      where: { id: Number(data.id) },
      data: {
        name: data.name,
        ageOfOwner: parseInt(data.ownerAge),
        businessAddress: data.address,
        genderOfOwner: data.sex,
        coreProductOrService: data.coreProductOrService,
        description: data.description,
        revenueBracket: data.revenue + "",
        yearsInOperation: data.operatingSince,
        sector: {
          connect: { id: parseInt(data.secrtorId) },
        },
        user: {
          connect: { id: userId },
        },
        phone: data.phone,
        email: data.email,
        logo: data.img || null,
        disabilityInclusion: "Yes",
        registrationStatus: "Yes",
      },
    });

    return { success: true, error: false, message: "Directory updated." };
  } catch (err) {
    console.error("Update failed:", err);
    return { success: false, error: true, message: "Update failed." };
  }
};

// create social media account

export const manageSocials = async (
  currentState: CurrentState,
  data: SocialSchema
) => {
  try {
    if (!data.businessId) {
      throw new Error("Missing businessId");
    }

    // Destructure only valid fields (ignoring undefined/empty ones)
    const { facebook, twitter, instagram, tiktok, youtube } = data;

    // Build the update/create object dynamically
    const updateData: Record<string, string> = {};
    if (facebook) updateData.facebook = facebook;
    if (twitter) updateData.twitter = twitter;
    if (instagram) updateData.instagram = instagram;
    if (tiktok) updateData.tiktok = tiktok;
    if (youtube) updateData.youtube = youtube;

    if (Object.keys(updateData).length === 0) {
      throw new Error("No social media data provided");
    }

    // Check if the record exists
    const existing = await prisma.socialMedia.findUnique({
      where: { businessId: parseInt(data.businessId) },
    });

    if (existing) {
      // Update only provided fields
      await prisma.socialMedia.update({
        where: { businessId: parseInt(data.businessId) },
        data: updateData,
      });
    } else {
      // Create new social media record
      await prisma.socialMedia.create({
        data: {
          businessId: parseInt(data.businessId),
          ...updateData,
        },
      });
    }

    return { success: true, error: false };
  } catch (err) {
    console.error("createOrUpdateSocialMedia error:", err);
    return { success: false, error: true };
  }
};

// manage workforce

export const manageWorkforce = async (
  currentState: CurrentState,
  data: WorkForceSchemaSchema
) => {
  try {
    const businessId = parseInt(data.businessId as string);

    if (isNaN(businessId)) {
      throw new Error("Invalid businessId");
    }

    const male = data.male ?? 0;
    const female = data.female ?? 0;
    const total = male + female;

    const existing = await prisma.workforce.findUnique({
      where: { businessId },
    });

    if (existing) {
      await prisma.workforce.update({
        where: { businessId },
        data: { male, female, total },
      });
    } else {
      await prisma.workforce.create({
        data: { businessId, male, female, total },
      });
    }

    return { success: true, error: false };
  } catch (err) {
    console.error("manageWorkforce error:", err);
    return { success: false, error: true };
  }
};

// manage sector

export const manageSector = async (
  currentState: CurrentState,
  data: SectorSchema
): Promise<CurrentState> => {
  try {
    const parsed = sectorSchema.parse(data);
    const sectorId = parsed.id ? parseInt(parsed.id) : null;

    // Check for duplicate name
    const existing = await prisma.sector.findFirst({
      where: {
        name: parsed.name,
        ...(sectorId ? { NOT: { id: sectorId } } : {}),
      },
    });

    if (existing) {
      return {
        success: false,
        error: true,
        message: "Sector name already exists!",
      };
    }

    if (sectorId) {
      // Update
      await prisma.sector.update({
        where: { id: sectorId },
        data: { name: parsed.name },
      });
    } else {
      // Create
      await prisma.sector.create({
        data: { name: parsed.name },
      });
    }

    return { success: true, error: false };
  } catch (err) {
    console.error("manageSector error:", err);
    return {
      success: false,
      error: true,
      message: "Something went wrong!",
    };
  }
};

export const deleteSector = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id");

  // Convert to number and handle invalid/null cases
  const sectorId = id ? Number(id) : undefined;

  if (!sectorId || isNaN(sectorId)) {
    return {
      success: false,
      error: true,
      message: "Invalid sector ID",
    };
  }

  try {
    await prisma.sector.delete({
      where: {
        id: sectorId,
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createUser = async (
  currentState: CurrentState,
  data: UserSchema
) => {
  try {
    const username =
      data.firstName && data.lastName
        ? data.firstName + data.lastName
        : data.email;

    const user = await clerkClient.users.createUser({
      username: username,
      password: "CHA@2025@yadot",
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: [data.email],
      publicMetadata: { role: data.role },
    });

    // Save user to your Prisma database

    await prisma.user.create({
      data: {
        id: user.id,
        username: user.username || username,
        firstname: data.firstName || null,
        lastname: data.lastName || null,
        email: data.email,
        phone: data.phone || null,
        address: data.address || null,
        img: data.img || null,
        sex: data.sex || null,
        birthday: data.birthday ? new Date(data.birthday) : null,
        role: data.role,
      },
    });

    return { success: true, error: false, message: "" };
  } catch (err: any) {
    console.log(err);
    let msg =
      err?.errors?.length > 0 ? err.errors[0]?.message : "Error saving user";
    return { success: false, error: true, message: msg };
  }
};
