"use client";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { Logo } from "../../../../../public";
import { useParams } from "next/navigation";
import { BusinessType, SectorType } from "@/lib/types";
import useSectors from "@/hooks/useSectors";
import useBusinessesById from "@/hooks/useBusinessesById";

const SectorBusinesses = () => {
    const { id } = useParams();
    const { businesses, isLoadingBiz } = useBusinessesById(Number(id));
    const { sectors, isLoadingSect } = useSectors();

    if (isLoadingSect || isLoadingBiz) {
        return (<div className="h-screen grid place-items-center">
            <div className="flex flex-col justify-center items-center p-4">
                <Image src={"/loading.gif"} width={50} height={50} alt="Loading animation" />
                <p>Loading data ...</p>
            </div>
        </div>);
    }

    return (
        <div className="pb-8 px-8 mt-[120px]">
            <div className="grid lg:grid-cols-3 h-[100px] gap-3 items-center grid-cols-[50px_1fr] mt-[130px] lg:mb-4 lg:mt-[130px]">
                <Link
                    href={"/business-directory"}
                    className="hover:cursor-pointer"
                >
                    <div className="bg-secondary hover:bg-primary p-4 rounded-full h-[50px] w-[50px]">
                        <FaArrowLeft className="text-white" size={16} />
                    </div>
                </Link>
                <p className="text-lg lg:text-3xl text-secondary lg:text-center font-bold">{sectors.find((sector: SectorType) => sector.id === Number(id))?.title || "Unknown Sector"}</p>
            </div>
            <div>
                {businesses.length === 0 ? (
                    <div className="px-8 py-16 grid place-items-center text-center">
                        No Businesses found in this sector
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-12 py-8">
                        {businesses.map((business: BusinessType) =>
                            <div
                                key={business.id}
                                className={`relative border-secondary border-4 p-8 rounded-lg flex flex-col gap-4 bg-[#faebe6] items-start`}
                            >
                                <Image
                                    src={business.logo === "" ? Logo : business.logo}
                                    alt={`${business.name} logo`}
                                    className="mt-8"
                                    height={100}
                                    width={150}
                                />
                                <h1 className="text-2xl font-bold">{business.name}</h1>
                                <p>
                                    {business.description.length > 200
                                        ? `${business.description.substring(0, 200)}...`
                                        : business.description}
                                </p>
                                <Link
                                    href={`/business-directory/${business.id}`}
                                    className="hover:cursor-pointer flex items-center gap-4 my-4"
                                >
                                    <p className="text-lg font-bold">Visit Profile</p>
                                    <div className="bg-[#07081a] p-4 rounded-full">
                                        <FaArrowRight className="text-white" size={16} />
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SectorBusinesses;
