"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { manageSector } from "@/lib/actions";
import { sectorSchema, SectorSchema } from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SectorForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SectorSchema>({
    resolver: zodResolver(sectorSchema),
  });

  const [state, formAction] = useFormState(manageSector, {
    success: false,
    error: false,
  });

  const onSubmit = handleSubmit((data) => {
    formAction({ ...data });
    // console.log(data);
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Operation Succesful`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  let defaultValue = data?.name;

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Manage Sector</h1>

      <div className="flex justify-between flex-wrap p-2">
        {data && (
          <InputField
            label="id"
            name="id"
            defaultValue={data.id}
            register={register}
            hidden
          />
        )}

        <InputField
          fullWidth
          label="Name"
          name="name"
          register={register}
          // inputProps={{ rows: 1, placeholder: "" }}
          error={errors.name}
          defaultValue={defaultValue}
        />
      </div>

      {state.error && (
        <span className="text-red-500 text-center">{state.message}</span>
      )}

      <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SectorForm;
