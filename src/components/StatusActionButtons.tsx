"use client";

import { BusinessStatus } from "@prisma/client";
import Image from "next/image";
import { useTransition } from "react";
import { updateBusinessStatus } from "@/lib/actions";

const StatusActionButtons = ({
  id,
  status,
}: {
  id: number;
  status: BusinessStatus;
}) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = (newStatus: BusinessStatus) => {
    startTransition(() => {
      updateBusinessStatus(id, newStatus);
    });
  };

  return (
    <>
      {status === BusinessStatus.Pending && (
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 disabled:bg-gray-400"
          onClick={() => handleClick(BusinessStatus.Active)}
          disabled={isPending}
          title="Approve"
        >
          <Image src="/check.svg" alt="approve" width={16} height={16} />
        </button>
      )}
      {status === BusinessStatus.Active && (
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500 disabled:bg-gray-400"
          onClick={() => handleClick(BusinessStatus.Inactive)}
          disabled={isPending}
          title="Deactivate"
        >
          <Image src="/close.svg" alt="deactivate" width={16} height={16} />
        </button>
      )}
      {status === BusinessStatus.Inactive && (
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 disabled:bg-gray-400"
          onClick={() => handleClick(BusinessStatus.Active)}
          disabled={isPending}
          title="Activate"
        >
          <Image src="/check.svg" alt="activate" width={16} height={16} />
        </button>
      )}
    </>
  );
};

export default StatusActionButtons;
