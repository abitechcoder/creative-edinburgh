"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { manageAnnouncement } from "@/lib/actions";
import {
  announcementSchema,
  AnnouncementSchema,
} from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomButton from "../CustomButton";

const AnnouncementForm = ({
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
  } = useForm<AnnouncementSchema>({
    resolver: zodResolver(announcementSchema),
  });

  const [state, formAction] = useFormState(manageAnnouncement, {
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
      toast(`Operation Succesful`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Announcement Manager</h1>

      <div className="flex justify-between flex-wrap p-2 gap-4">
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
          label="Title"
          name="title"
          register={register}
          error={errors.title}
          defaultValue={data?.title}
        />

        <InputField
          fullWidth
          label="Description"
          name="description"
          register={register}
          as="textarea"
          inputProps={{ rows: 3, placeholder: "Enter description..." }}
          error={errors.description}
          defaultValue={data?.description}
        />
      </div>

      {state.error && (
        <span className="text-red-500 text-center">{state.message}</span>
      )}

      <CustomButton type={type} loading={state.loading} />
    </form>
  );
};

export default AnnouncementForm;
