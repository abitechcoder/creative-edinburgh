import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  as?: "input" | "textarea"; // Add this prop
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  fullWidth?: boolean;
  hidden?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

const InputField = ({
  label,
  type = "text",
  as = "input", // Default is input
  register,
  name,
  defaultValue,
  error,
  hidden,
  inputProps,
  fullWidth,
}: InputFieldProps) => {
  return (
    <div
      className={
        hidden
          ? "hidden"
          : `flex flex-col gap-2 ${fullWidth ? "w-full" : "w-full md:w-1/4"}`
      }
    >
      <label className="text-xs text-gray-500">{label}</label>

      {as === "textarea" ? (
        <textarea
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          defaultValue={defaultValue}
          {...inputProps}
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          defaultValue={defaultValue}
          {...inputProps}
        />
      )}

      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
