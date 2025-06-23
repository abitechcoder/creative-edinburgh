"use server";
import {
  DirectorySchema,
  SocialSchema,
  WorkForceSchemaSchema,
} from "./formValidationSchemas";
import prisma from "./prisma";
import { clerkClient } from "@clerk/nextjs/server";

type CurrentState = { success: boolean; error: boolean };

export const createDirectory = async (
  currentState: CurrentState,
  data: DirectorySchema
) => {
  try {
    const user = await clerkClient.users.createUser({
      username: data.firstName + data.lastName,
      password: "CHA@2025@yadot",
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: [data.email],
      publicMetadata: { role: "member" },
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
        userId: user.id,
        phone: data.phone,
        email: data.email,
        logo: data.img || null,
        disabilityInclusion: "Yes",
        registrationStatus: "Yes",
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateDirectory = async (
  currentState: CurrentState,
  data: DirectorySchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    // const user = await clerkClient.users.updateUser(data.id, {
    //   username: data.username,
    //   ...(data.password !== "" && { password: data.password }),
    //   firstName: data.name,
    //   lastName: data.surname,
    // });

    // await prisma.business.update({
    //   where: {
    //     id: data.id,
    //   },
    //   data: {
    //     ...(data.password !== "" && { password: data.password }),
    //     username: data.username,
    //     name: data.name,
    //     surname: data.surname,
    //     email: data.email || null,
    //     phone: data.phone || null,
    //     address: data.address,
    //     img: data.img || null,
    //     bloodType: data.bloodType,
    //     sex: data.sex,
    //     birthday: data.birthday,
    //     subjects: {
    //       set: data.subjects?.map((subjectId: string) => ({
    //         id: parseInt(subjectId),
    //       })),
    //     },
    //   },
    // });
    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
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
