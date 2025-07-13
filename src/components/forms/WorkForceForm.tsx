"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { manageWorkforce } from "@/lib/actions";
import {
  workForceSchema,
  WorkForceSchemaSchema,
} from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomButton from "../CustomButton";

const WorkForceForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update" | "view";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkForceSchemaSchema>({
    resolver: zodResolver(workForceSchema),
  });

  const [state, formAction] = useFormState(manageWorkforce, {
    success: false,
    error: false,
    message: "",
    loading: false,
  });

  const onSubmit = handleSubmit((data) => {
    state.loading = true;
    formAction({ ...data });
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Workforce update`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  let defaultMale = data?.workforce?.male ? data?.workforce?.male : 0;
  let defaultFemale = data?.workforce?.female ? data?.workforce?.female : 0;

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Manage Workforce</h1>

      <div className="flex justify-between flex-wrap p-2">
        {data && (
          <InputField
            label="businessId"
            name="businessId"
            defaultValue={data.id}
            register={register}
            hidden
          />
        )}
        <InputField
          label="Female"
          name="female"
          register={register}
          error={errors.female}
          defaultValue={defaultFemale}
        />

        <InputField
          label="Male"
          name="male"
          register={register}
          // inputProps={{ rows: 1, placeholder: "" }}
          error={errors.male}
          defaultValue={defaultMale}
        />
      </div>

      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}

      <CustomButton type={type} loading={state.loading} />
    </form>
  );
};

export default WorkForceForm;
