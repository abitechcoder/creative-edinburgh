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
import { Business, Sector } from "@prisma/client";

const EventForm = ({
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
  } = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
  });

  const { sectors, businesses } = relatedData;

  const [state, formAction] = useFormState(manageEvent, {
    success: false,
    error: false,
    message: "",
    loading: false,
  });

  const onSubmit = handleSubmit((data) => {
    state.loading = true;
    formAction({ ...data });
    // console.log(data, "the data");
  });

  // console.log(data, "the data");

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Operation Succesful`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);
  if (type === "view")
    return (
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold">{data?.title}</h1>

        {data?.businessId ? (
          <p className="">
            Business:
            <span className="font-semibold">
              {" "}
              {businesses.find((biz: Business) => biz.id === data.businessId)
                ?.name || " All "}
            </span>
          </p>
        ) : (
          <p className="">
            Sector:
            <span className="font-semibold">
              {" "}
              {sectors.find((sector: Sector) => sector.id === data.sectorId)
                ?.name || " All "}{" "}
            </span>
          </p>
        )}

        <p className="">{data?.description}</p>

        <div className="flex gap-4">
          <p className="">
            Starts{" "}
            <span className="font-semibold">
              {moment(data?.startTime).format("YYYY-MM-DD hh:mm")}
            </span>
          </p>

          <p className="">
            Ends{" "}
            <span className="font-semibold">
              {moment(data?.endTime).format("YYYY-MM-DD hh:mm")}{" "}
            </span>
          </p>
        </div>
      </div>
    );
  else
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

          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Business</label>

            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("businessId")}
              defaultValue={data?.businessId}
            >
              <option value={""}>Select</option>

              {businesses.map(
                (biz: { id: string; name: string; surname: string }) => (
                  <option value={biz.id} key={biz.id}>
                    {biz.name}
                  </option>
                )
              )}
            </select>

            {errors.businessId?.message && (
              <p className="text-xs text-red-400">
                {errors.businessId.message.toString()}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">Sector</label>

            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("sectorId")}
              defaultValue={data?.sectorId}
            >
              <option value={""}>Select</option>
              {sectors.map(
                (sector: { id: string; name: string; surname: string }) => (
                  <option value={sector.id} key={sector.id}>
                    {sector.name}
                  </option>
                )
              )}
            </select>

            {errors.sectorId?.message && (
              <p className="text-xs text-red-400">
                {errors.sectorId.message.toString()}
              </p>
            )}
          </div>

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
