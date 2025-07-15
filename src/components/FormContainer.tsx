import prisma from "@/lib/prisma";
import FormModal from "./FormModal";
import { auth } from "@clerk/nextjs/server";
// fix error

export type FormContainerProps = {
  table:
    | "directory"
    | "socialmedia"
    | "workforce"
    | "sector"
    | "user"
    | "event"
    | "announcement"
    | "product";
  type: "create" | "update" | "delete" | "view";
  data?: any;
  id?: number | string;
  text?: any;
};

const FormContainer = async ({
  table,
  type,
  data,
  id,
  text,
}: FormContainerProps) => {
  let relatedData = {};

  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  const currentUserId = userId;

  if (type !== "delete") {
    switch (table) {
      case "directory":
        const sectors = await prisma.sector.findMany({
          select: { name: true, id: true },
        });
        relatedData = { sectors: sectors };
        break;

      case "event":
        const allSectors = await prisma.sector.findMany({
          select: { name: true, id: true },
        });

        const allBiz = await prisma.business.findMany({
          select: { name: true, id: true },
        });
        relatedData = { sectors: allSectors, businesses: allBiz };
        break;

      default:
        break;
    }
  }

  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
        text={text}
      />
    </div>
  );
};

export default FormContainer;
