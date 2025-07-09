"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { manageEvent } from "@/lib/actions";
import { eventSchema, EventSchema } from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import moment from "moment";
import CustomButton from "../CustomButton";

const EventForm = ({
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
  } = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
  });

  const [state, formAction] = useFormState(manageEvent, {
    success: false,
    error: false,
    message: "",
    loading: false,
  });

  const onSubmit = handleSubmit((data) => {
    state.loading = true;
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

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Event Manager</h1>

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

        <InputField
          label="Start Time"
          name="startTime"
          defaultValue={moment(data?.startTime).format("YYYY-MM-DD")}
          register={register}
          error={errors.startTime}
          type="datetime-local"
        />

        <InputField
          label="End Time"
          name="endTime"
          defaultValue={moment(data?.endTime).format("YYYY-MM-DD")}
          register={register}
          error={errors.endTime}
          type="datetime-local"
        />
      </div>

      {state.error && (
        <span className="text-red-500 text-center">{state.message}</span>
      )}

      <CustomButton type={type} loading={state.loading} />
    </form>
  );
};

export default EventForm;
