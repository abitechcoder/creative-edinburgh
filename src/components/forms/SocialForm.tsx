"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { manageSocials } from "@/lib/actions";
import { SocialSchema, socialSchema } from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SocialForm = ({
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
  } = useForm<SocialSchema>({
    resolver: zodResolver(socialSchema),
  });

  const [state, formAction] = useFormState(manageSocials, {
    success: false,
    error: false,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data, "data");
    // formAction({ ...data });
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Socials has been added`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Social Media Manager</h1>

      <div className="flex justify-between flex-wrap gap-4">
        {data && (
          <InputField
            label="businessId"
            name="businessId"
            defaultValue={data?.id}
            register={register}
            hidden
          />
        )}
        <InputField
          fullWidth
          label="Facebook"
          name="facebook"
          register={register}
          as="textarea"
          inputProps={{ rows: 1, placeholder: "" }}
        />

        <InputField
          fullWidth
          label="Instagram"
          name="instagram"
          register={register}
          as="textarea"
          inputProps={{ rows: 1, placeholder: "" }}
          error={errors.instagram}
        />

        <InputField
          fullWidth
          label="X"
          name="twitter"
          register={register}
          as="textarea"
          inputProps={{ rows: 1, placeholder: "" }}
          error={errors.twitter}
        />

        <InputField
          fullWidth
          label="Tiktok"
          name="tiktok"
          register={register}
          as="textarea"
          inputProps={{ rows: 1, placeholder: "" }}
          error={errors.tiktok}
        />
      </div>

      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}

      <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SocialForm;
