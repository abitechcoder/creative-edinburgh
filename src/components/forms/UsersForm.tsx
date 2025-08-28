"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { createUser } from "@/lib/actions";
import { UserSchema, userSchema } from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomButton from "../CustomButton";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const UsersForm = ({
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
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const [state, formAction] = useFormState(createUser, {
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
      toast(`user has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  // const {} = relatedData;

  if (type === "view")
    return (
      <div className="flex flex-col gap-5 items-center">
        <Image
          src={data.img || "/logo.png"}
          alt=""
          width={100}
          height={100}
          className="md:hidden xl:block w-32 h-5w-32 rounded-full object-cover "
        />
        <h1 className="text-xl font-semibold">
          {data?.firstname + " " + data?.lastname}
        </h1>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <FaEnvelope size={18} color="#CFCEFF" />
            <p className="">{data?.email}</p>
          </div>

          <div className="flex gap-4">
            <FaPhone size={18} color="#CFCEFF" />
            <p className="">{data?.phone}</p>
          </div>

          <div className="flex gap-4">
            <FaLocationPin size={18} color="#CFCEFF" />
            <p className="">{data?.address}</p>
          </div>
        </div>
      </div>
    );
  else
    return (
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold">Manage User</h1>

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

          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">User Role</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("role")}
              defaultValue={data?.role}
            >
              <option value="admin">Admin</option>
              <option value="cha">CHA Admin</option>
              <option value="partner">Donor Partner Admin</option>
            </select>
            {errors.role?.message && (
              <p className="text-xs text-red-400">
                {errors.role.message.toString()}
              </p>
            )}
          </div>
        </div>

        {state.error && <span className="text-red-500">{state.message}</span>}

        <CustomButton type={type} loading={state.loading} />
      </form>
    );
};

export default UsersForm;
