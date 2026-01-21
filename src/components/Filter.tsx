"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BusinessStatus } from "@prisma/client";

const Filter = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const params = new URLSearchParams(searchParams);
    const { name, value } = e.target;

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center gap-4">
      <select
        name="status"
        className="text-sm px-4 py-2 rounded-md bg-gray-100"
        onChange={handleFilterChange}
        defaultValue={searchParams.get("status") || ""}
      >
        <option value="">All Statuses</option>
        <option value={BusinessStatus.Active}>Active</option>
        <option value={BusinessStatus.Inactive}>Inactive</option>
        <option value={BusinessStatus.Pending}>Pending</option>
      </select>
    </div>
  );
};

export default Filter;
