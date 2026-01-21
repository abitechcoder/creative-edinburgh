"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FormModal from "./FormModal";
import { getSectors } from "@/lib/actions";

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
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

const FormContainer = ({
  table,
  type,
  data,
  id,
  text,
  setOpen,
}: FormContainerProps) => {
  const [relatedData, setRelatedData] = useState({});

  useEffect(() => {
    const fetchRelatedData = async () => {
      if (type !== "delete") {
        switch (table) {
          case "directory":
            try {
              const sectors = await getSectors();
              setRelatedData({ sectors });
            } catch (error) {
              console.error("Failed to fetch sectors:", error);
            }
            break;
          // Add other cases as needed
          default:
            break;
        }
      }
    };

    fetchRelatedData();
  }, [table, type]);

  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
        text={text}
        setOpen={setOpen}
      />
    </div>
  );
};

export default FormContainer;
