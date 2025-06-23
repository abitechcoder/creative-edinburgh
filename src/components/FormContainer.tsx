import prisma from "@/lib/prisma";
import FormModal from "./FormModal";
import { auth } from "@clerk/nextjs/server";

export type FormContainerProps = {
  table:
    | "directory"
    | "socialmedia"
    | "workforce"
    | "teacher"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
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
