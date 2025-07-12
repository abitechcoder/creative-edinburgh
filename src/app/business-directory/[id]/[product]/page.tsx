// Import the required Chart.js components
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
} from "chart.js";
import styles from "@/style";

import Image from "next/image";
import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import ProductList from "@/components/ProductList";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

const ProductDetails = async ({
  params: { id, product },
}: {
  params: { id: string; product: string };
}) => {
  const member: Product | null = await prisma.product.findUnique({
    where: { id: Number(product) },
  });

  if (!member) {
    console.log(id, "vs", product);
    return;
  }
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row pt-48">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row w-full lg:justify-between items-start lg:items-center gap-8">
          <div
            className={`relative w-full ${"h-96"} rounded-md overflow-hidden`}
          >
            <Image
              src={member.image || "/logo.png"}
              alt={`${member.name} image`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2
          className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16 uppercase`}
        >
          {member?.name}
        </h2>
        <p
          className={`${styles.paragraph} text-gray-700 font-medium leading-relaxed text-xl mb-6 lg:mb-10`}
        >
          {member?.description}
        </p>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <ProductList
          sideList={true}
          businessId={Number(id)}
          adminView={false}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
