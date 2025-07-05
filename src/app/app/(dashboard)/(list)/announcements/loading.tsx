// app/business-directory/sector/[id]/loading.tsx
import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/loading.gif"
          width={50}
          height={50}
          alt="Loading animation"
        />
        <p className="text-gray-500">Fetching data</p>
      </div>
    </div>
  );
};

export default Loading;
