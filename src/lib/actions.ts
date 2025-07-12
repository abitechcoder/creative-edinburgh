"use server";
import {
  AnnouncementSchema,
  DirectorySchema,
  EventSchema,
  ProductSchema,
  productSchema,
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
  loading: boolean;
};

export const createDirectory = async (
  currentState: CurrentState,
  data: any
): Promise<CurrentState> => {
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
    return { success: true, error: false, message: "", loading: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true, message: "", loading: false };
  }
};

export const updateDirectory = async (
  currentState: CurrentState,
  data: any
): Promise<CurrentState> => {
  try {
    let userId = data.userId;
    let clerkUser: any;

    // 1. Check if userId is missing or empty — create new Clerk user
    if (!userId || userId.trim() === "") {
      console.log("pass two");
      clerkUser = await clerkClient.users.createUser({
        username: data.firstName + data.lastName,
        password: "CHA@2025@yadot",
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: [data.email],
        publicMetadata: { role: "member" },
      });
      userId = clerkUser.id;
    } else {
      // 2. Try to fetch the Clerk user
      try {
        console.log("pass one");
        clerkUser = await clerkClient.users.getUser(userId);
      } catch (err) {
        // 3. If Clerk user does not exist, create it
        console.log("pass two - user not found, creating");
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
    }

    // 4. Check if Prisma user exists
    console.log("pass three", clerkUser, userId);
    const existingLocalUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingLocalUser) {
      console.log("pass four");
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
      console.log("pass five");
      await prisma.user.update({
        where: { id: userId },
        data: {
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

    // 5. Update Business
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

    return {
      success: true,
      error: false,
      message: "Directory updated.",
      loading: false,
    };
  } catch (err) {
    console.error("Update failed:", err);
    return {
      success: false,
      error: true,
      message: "Update failed.",
      loading: false,
    };
  }
};

// create social media account

export const manageSocials = async (
  currentState: CurrentState,
  data: SocialSchema
): Promise<CurrentState> => {
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

    return { success: true, error: false, loading: false };
  } catch (err) {
    console.error("createOrUpdateSocialMedia error:", err);
    return { success: false, error: true, loading: false };
  }
};

// manage workforce

export const manageWorkforce = async (
  currentState: CurrentState,
  data: WorkForceSchemaSchema
): Promise<CurrentState> => {
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

    return { success: true, error: false, loading: false };
  } catch (err) {
    console.error("manageWorkforce error:", err);
    return { success: false, error: true, loading: false };
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
        loading: false,
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

    return { success: true, error: false, loading: false };
  } catch (err) {
    console.error("manageSector error:", err);
    return {
      success: false,
      error: true,
      message: "Something went wrong!",
      loading: false,
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
): Promise<CurrentState> => {
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

    return { success: true, error: false, loading: false, message: "" };
  } catch (err: any) {
    console.log(err);
    let msg =
      err?.errors?.length > 0 ? err.errors[0]?.message : "Error saving user";
    return { success: false, error: true, message: msg, loading: false };
  }
};

export const manageEvent = async (
  currentState: CurrentState,
  data: EventSchema
): Promise<CurrentState> => {
  try {
    const eventId = data.id ? parseInt(data.id) : null;

    const commonData = {
      title: data.title,
      description: data.description,
      startTime: new Date(data.startTime),
      endTime: new Date(data.endTime),
      ...(data.sectorId ? { sectorId: parseInt(data.sectorId) } : {}),
    };

    if (eventId) {
      await prisma.event.update({
        where: { id: eventId },
        data: commonData,
      });
    } else {
      await prisma.event.create({ data: commonData });
    }

    return { success: true, error: false, loading: false, message: "" };
  } catch (err) {
    console.error("manageEvent error:", err);
    return {
      success: false,
      error: true,
      message: "Something went wrong!",
      loading: false,
    };
  }
};

export const deleteEvent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id");

  // Convert to number and handle invalid/null cases
  const eventId = id ? Number(id) : undefined;

  if (!eventId || isNaN(eventId)) {
    return {
      success: false,
      error: true,
      message: "Invalid sector ID",
    };
  }

  try {
    await prisma.event.delete({
      where: {
        id: eventId,
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const manageAnnouncement = async (
  currentState: CurrentState,
  data: AnnouncementSchema
): Promise<CurrentState> => {
  try {
    const announcementId = data.id ? parseInt(data.id) : null;

    const commonData = {
      title: data.title,
      description: data.description,
      date: new Date(),
      ...(data.sectorId ? { sectorId: parseInt(data.sectorId) } : {}),
      ...(data.businessId ? { businessId: parseInt(data.businessId) } : {}),
    };

    if (announcementId) {
      await prisma.announcement.update({
        where: { id: announcementId },
        data: commonData,
      });
    } else {
      await prisma.announcement.create({ data: commonData });
    }

    return { success: true, error: false, loading: false };
  } catch (err) {
    console.error("manageAnnouncement error:", err);
    return {
      success: false,
      error: true,
      message: "Something went wrong!",
      loading: false,
    };
  }
};

// reort data

// Businesses by Sector Used
export const getBusinessesBySector = async () => {
  const sectors = await prisma.sector.findMany({
    include: {
      _count: {
        select: { businesses: true },
      },
    },
  });

  return sectors.map((sector) => ({
    name: sector.name,
    count: sector._count.businesses,
  }));
};

// Disability Inclusion Used
export const getDisabilityInclusionStats = async () => {
  return prisma.business.groupBy({
    by: ["disabilityInclusion"],
    _count: true,
  });
};

// Registered vs Unregistered used
export const getRegistrationStats = async () => {
  return prisma.business.groupBy({
    by: ["registrationStatus"],
    _count: true,
  });
};

// Growth Over Time not used
export const getMonthlyGrowth = async () => {
  return prisma.business.groupBy({
    by: ["createdAt"],
    _count: true,
    orderBy: {
      createdAt: "asc",
    },
  });
};

// used
export const getRevenueBracketBySector = async () => {
  const businesses = await prisma.business.findMany({
    where: {
      revenueBracket: {
        not: null,
      },
      sector: {
        isNot: null,
      },
    },
    select: {
      revenueBracket: true,
      sector: {
        select: {
          name: true,
        },
      },
    },
  });

  // Aggregate count by "Sector - RevenueBracket"
  const grouped: Record<string, number> = {};

  for (const biz of businesses) {
    const key = `${biz.sector?.name} - ${biz.revenueBracket}`;
    grouped[key] = (grouped[key] || 0) + 1;
  }

  // Format for Recharts
  return Object.entries(grouped).map(([name, count]) => ({
    name,
    count,
  }));
};

// getDisabilityCountPerSector
export const getDisabilityCountPerSector = async () => {
  const data = await prisma.business.groupBy({
    by: ["sectorId"],
    where: {
      disabilityInclusion: {
        equals: "Yes",
      },
    },
    _count: true,
  });

  const result = await Promise.all(
    data.map(async (item) => {
      const sector = await prisma.sector.findUnique({
        where: { id: item.sectorId! },
      });
      return {
        name: sector?.name || "Unknown",
        count: item._count,
      };
    })
  );

  return result;
};

export const getRegisteredCountPerSector = async () => {
  const data = await prisma.business.groupBy({
    by: ["sectorId"],
    where: {
      registrationStatus: {
        equals: "Registered",
      },
    },
    _count: true,
  });

  const result = await Promise.all(
    data.map(async (item) => {
      const sector = await prisma.sector.findUnique({
        where: { id: item.sectorId! },
      });
      return {
        name: sector?.name || "Unknown",
        count: item._count,
      };
    })
  );

  return result;
};

// manage product

export const manageProduct = async (
  currentState: CurrentState,
  data: ProductSchema
): Promise<CurrentState> => {
  try {
    const parsed = productSchema.parse(data);
    const productId = parsed.id ? parseInt(parsed.id) : null;

    // Check for duplicate product name within the same business
    const existing = await prisma.product.findFirst({
      where: {
        name: parsed.name,
        businessId: parsed.businessId,
        ...(productId ? { NOT: { id: productId } } : {}),
      },
    });

    if (existing) {
      return {
        success: false,
        error: true,
        message: "Product name already exists for this business!",
        loading: false,
      };
    }

    if (productId) {
      // Update product
      await prisma.product.update({
        where: { id: productId },
        data: {
          name: parsed.name,
          description: parsed.description,
          price: parsed.price ? parsed.price : null,
          category: parsed.category || null,
          image: parsed.img || null,
        },
      });
    } else {
      // Create product
      await prisma.product.create({
        data: {
          name: parsed.name,
          description: parsed.description,
          price: parsed.price ? parsed.price : null,
          category: parsed.category || null,
          image: parsed.img || null,
          businessId: parsed.businessId,
        },
      });
    }

    return { success: true, error: false, loading: false };
  } catch (err) {
    console.error("manageProduct error:", err);
    return {
      success: false,
      error: true,
      message: "Something went wrong!",
      loading: false,
    };
  }
};

// delete product

export const deleteProduct = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id");

  // Convert to number and handle invalid/null cases
  const productId = id ? Number(id) : undefined;

  if (!productId || isNaN(productId)) {
    return {
      success: false,
      error: true,
      message: "Invalid sector ID",
    };
  }

  try {
    await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

// src/lib/actions.ts or similar

export const getEventsForCalendar = async () => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const startDate = new Date(currentYear, currentMonth - 1, 1); // Previous month
  const endDate = new Date(currentYear, currentMonth + 2, 0); // End of next month

  const events = await prisma.event.findMany({
    where: {
      startTime: {
        gte: startDate,
        lte: endDate,
      },
    },
    select: {
      id: true,
      title: true,
      startTime: true,
    },
  });

  return events;
};
