import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

import FormContainer from "./FormContainer";
import { auth } from "@clerk/nextjs/server";
import FormModal from "./FormModal";

const ProductList = async ({
  businessId,
  adminView = false,
  sideList = false,
}: {
  businessId: number;
  adminView?: boolean;
  sideList?: boolean;
}) => {
  const [data] = await prisma.$transaction([
    prisma.product.findMany({
      where: { businessId },
    }),
  ]);

  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  return (
    <div
      className={`w-full ${
        sideList ? "max-h-[calc(100vh-100px)] overflow-y-auto" : ""
      }`}
    >
      <div className="flex gap-6 items-center my-3 mt-4">
        <h3 className="font-black uppercase lg:text-xl text-lg text-secondary">
          Catalogue
        </h3>

        {adminView && role === "admin" && (
          <FormContainer
            table="product"
            type="create"
            data={{ id: null, businessId: businessId }}
          />
        )}
      </div>

      {data.length === 0 ? (
        <div className="py-16 grid place-items-center text-center text-gray-500">
          No products found for this business.
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            sideList
              ? "grid-cols-1" // vertical list for sidebar
              : `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
                  adminView ? "lg:grid-cols-3" : "lg:grid-cols-4"
                }` // grid layout for full view
          }`}
        >
          {data.map((product: Product) => (
            <div
              key={product.id}
              className="bg-[#faebe6] border-2 border-secondary p-4 rounded-lg flex flex-col justify-between"
            >
              <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image
                  src={product.image || "/logo.png"}
                  alt={`${product.name} image`}
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="text-lg font-bold mt-4 truncate">
                {product.name}
              </h1>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <Link
                  href={
                    adminView
                      ? `/app/directories/${businessId}/${product.id}`
                      : `/business-directory/${businessId}/${product.id}`
                  }
                  className="hover:cursor-pointer flex items-center gap-2"
                >
                  <span className="text-sm font-medium text-primary">
                    Details
                  </span>
                  <div className="bg-[#07081a] p-2 rounded-full">
                    <FaArrowRight className="text-white" size={12} />
                  </div>
                </Link>

                {adminView && role === "admin" && (
                  <FormModal table="product" type="delete" id={product.id} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
