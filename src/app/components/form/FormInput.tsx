import React from "react";
import {
  FieldError,
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path,
} from "react-hook-form";

interface FormInputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  label: string;
  register: UseFormRegister<TFieldValues>;
  required: boolean;
  type?: string;
  errors?: FieldErrors<TFieldValues>;
}

const FormInput = <TFieldValues extends FieldValues>({
  name,
  label,
  register,
  required,
  type = "text",
  errors,
}: FormInputProps<TFieldValues>) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        {...register(name, { required })}
        className="input input-bordered w-full"
      />
      {errors && errors[name] && (
        <span className="text-red-500 text-sm">
          {(errors[name] as FieldError).message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
