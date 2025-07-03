"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TableSearch = ({ moreStyle = false }: { moreStyle?: boolean }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");

  const hasQuery =
    !!searchParams.get("search") ||
    !!searchParams.get("sectorId") ||
    !!searchParams.get("page");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    params.set("search", search);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    router.push(window.location.pathname); // Clear all query params
    setSearch("");
  };

  return (
    <div className="flex gap-4 items-center">
      <form
        onSubmit={handleSubmit}
        className={`w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-4 ${
          moreStyle ? "py-2" : "py-1"
        }`}
      >
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </form>

      {hasQuery && (
        <button onClick={handleReset} type="button" title="Reset filters">
          <Image src="/refresh.png" alt="" width={22} height={22} />
        </button>
      )}
    </div>
  );
};

export default TableSearch;
