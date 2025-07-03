"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const MyAccordion = ({ name, data }: { name: string; data: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Number>();

  const router = useRouter();
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group hover:cursor-pointer hover:bg-secondary/10 px-4 flex items-center justify-between py-6"
      >
        <p className="text-lg text-black font-bold uppercase">{name}</p>
        <div className="p-4 group-hover:bg-orange-500 rounded-full">
          {!isOpen ? (
            <FaPlus size={16} className="group-hover:text-white" />
          ) : (
            <FaMinus size={16} className="group-hover:text-white" />
          )}
        </div>
      </div>
      <div
        className={`py-4 flex flex-wrap gap-3 transition-all duration-1000 ${
          !isOpen ? "hidden" : "block"
        }`}
      >
        <div
          onClick={() => {
            setSelectedItem(0);
            const params = new URLSearchParams(window.location.search);

            // Remove sectorId
            params.delete("sectorId");

            // Push the updated URL (only pathname if no params left)
            const queryString = params.toString();
            router.push(
              `${window.location.pathname}${
                queryString ? `?${queryString}` : ""
              }`
            );
          }}
          className={`px-4 py-2 ${
            selectedItem === 0
              ? "bg-secondary text-white"
              : "bg-gray-200 text-black"
          } hover:bg-secondary hover:text-white hover:cursor-pointer rounded-lg font-semibold text-sm`}
        >
          All
        </div>
        {data?.map((item: { id: number; name: string }) => (
          <div
            key={item.id}
            onClick={() => {
              setSelectedItem(item.id);
              const params = new URLSearchParams(window.location.search);
              params.set("sectorId", item.id.toString());
              router.push(`${window.location.pathname}?${params}`);
            }}
            className={`px-4 py-2 ${
              selectedItem === item.id
                ? "bg-secondary text-white"
                : "bg-gray-200 text-black"
            } hover:bg-secondary hover:text-white hover:cursor-pointer rounded-lg font-semibold text-sm`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <hr className="text-gray-400" />
    </div>
  );
};

export default MyAccordion;
