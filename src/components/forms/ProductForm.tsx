"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { manageProduct } from "@/lib/actions";
import { ProductSchema, productSchema } from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import CustomButton from "../CustomButton";

const ProductForm = ({
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
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
  });
  const [img, setImg] = useState<any>();

  const [state, formAction] = useFormState(manageProduct, {
    success: false,
    error: false,
    message: "",
    loading: false,
  });

  const onSubmit = handleSubmit((data) => {
    state.loading = true;
    formAction({ ...data, img: img?.secure_url });
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
      <h1 className="text-xl font-semibold">Catalogue Manager</h1>

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

        {data && (
          <InputField
            label="BusinessId"
            name="businessId"
            defaultValue={data.businessId}
            register={register}
            hidden
          />
        )}

        <InputField
          fullWidth
          label="Name"
          name="name"
          register={register}
          error={errors.name}
          defaultValue={data?.name}
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
          <label className="text-xs text-gray-500">Category</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("category")}
            defaultValue={data?.category}
          >
            <option value="Service">Service</option>
            <option value="Product">Product</option>
          </select>
          {errors.category?.message && (
            <p className="text-xs text-red-400">
              {errors.category.message.toString()}
            </p>
          )}
        </div>

        <InputField
          label="Price"
          name="price"
          defaultValue={data?.price}
          register={register}
          error={errors.price}
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
                <span>{img ? img?.original_filename : "Upload a photo"}</span>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>

      {state.error && (
        <span className="text-red-500 text-center">{state.message}</span>
      )}

      <CustomButton type={type} loading={state.loading} />
    </form>
  );
};

export default ProductForm;
