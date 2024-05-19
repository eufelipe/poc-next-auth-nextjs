import React from "react";

import FormInput from "@/app/components/form/FormInput";
import { useRegister } from "./useRegister";
import { RegisterFormInputs } from "./validation.scheme";
import Link from "next/link";

const RegisterForm: React.FC = () => {
  const { onSubmit, register, errors, handleSubmit } = useRegister();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 space-y-4 w-full max-w-sm"
      >
        <FormInput<RegisterFormInputs>
          name="Name"
          label="Name"
          register={register}
          required
          errors={errors}
        />
        <FormInput<RegisterFormInputs>
          name="Email"
          label="Email"
          register={register}
          required
          type="email"
          errors={errors}
        />
        <FormInput<RegisterFormInputs>
          name="Password"
          label="Password"
          register={register}
          required
          type="password"
          errors={errors}
        />
        <button type="submit" className="btn btn-primary w-full">
          Registrar
        </button>
      </form>

      <p className="text-center mt-4">
        Já tem uma conta?{" "}
        <Link href="/" className="text-blue-500 underline">
          Faça login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
