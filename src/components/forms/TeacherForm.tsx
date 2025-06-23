"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { createDirectory, updateDirectory } from "@/lib/actions";
import { directorySchema } from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";

type Inputs = z.infer<typeof directorySchema>;

const DirectoryForm = ({
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
  } = useForm<Inputs>({
    resolver: zodResolver(directorySchema),
  });

  const [img, setImg] = useState<any>();

  const [state, formAction] = useFormState(
    type === "create" ? createDirectory : updateDirectory,
    {
      success: false,
      error: false,
    }
  );

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction({ ...data, img: img?.secure_url });
  });

  const router = useRouter();

  const { sectors } = relatedData;

  useEffect(() => {
    if (state.success) {
      toast(`Directory has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  // const {} = relatedData;

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Add a new directory</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />

        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
        />

        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Directory Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Business Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sector</label>

          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("secrtorId")}
            defaultValue={data?.secrtorId}
          >
            {sectors.map(
              (sector: { id: string; name: string; surname: string }) => (
                <option value={sector.id} key={sector.id}>
                  {sector.name}
                </option>
              )
            )}
          </select>

          {errors.secrtorId?.message && (
            <p className="text-xs text-red-400">
              {errors.secrtorId.message.toString()}
            </p>
          )}
        </div>

        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />

        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />

        <InputField
          label="Revenue"
          name="revenue"
          defaultValue={data?.revenue}
          register={register}
          // error={errors.revenue}
        />

        <InputField
          label="Operating Since"
          name="operatingSince"
          defaultValue={data?.operatingSince}
          register={register}
          error={errors.operatingSince}
          type="date"
        />

        <InputField
          label="Owner's Age"
          name="ownerAge"
          defaultValue={data?.ownerAge}
          register={register}
          error={errors.ownerAge}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Owner's Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>

        <InputField
          fullWidth
          label="Core Product Or Service"
          name="coreProductOrService"
          register={register}
          as="textarea"
          inputProps={{ rows: 1, placeholder: "core product..." }}
          error={errors.coreProductOrService}
        />
        <InputField
          fullWidth
          label="Description"
          name="description"
          register={register}
          as="textarea"
          inputProps={{ rows: 3, placeholder: "Enter description..." }}
          error={errors.description}
        />
        <CldUploadWidget
          uploadPreset="CreativeHubAfrrica"
          onSuccess={(result, { widget }) => {
            setImg(result.info);
            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <div
                className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                onClick={() => open()}
              >
                <Image src="/upload.png" alt="" width={28} height={28} />
                <span>Upload a photo</span>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>

      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default DirectoryForm;
