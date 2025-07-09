import Image from "next/image";

const CustomButton = ({
  type,
  loading,
}: {
  loading: boolean;
  type: string;
}) => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {loading ? (
        <div className="flex justify-center">
          <Image
            src="/loading.gif"
            width={50}
            height={50}
            alt="Loading animation"
          />
        </div>
      ) : (
        <button
          type="submit"
          className="bg-blue-400 text-white p-2 rounded-md w-full"
        >
          {type === "create" ? "Create" : "Update"}
        </button>
      )}
    </div>
  );
};

export default CustomButton;
