import React from "react";

import Link from "next/link";

import { useRegister } from "./useRegister";
import { RegisterFormInputs } from "./validation.scheme";
import { FormInput } from "@/app/components";

const RegisterForm: React.FC = () => {
  const { onSubmit, register, errors, handleSubmit, registerError } =
    useRegister();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 space-y-4 w-full max-w-sm"
      >
        <FormInput<RegisterFormInputs>
          name="name"
          label="Name"
          register={register}
          required
          errors={errors}
        />
        <FormInput<RegisterFormInputs>
          name="email"
          label="Email"
          register={register}
          required
          type="email"
          errors={errors}
        />
        <FormInput<RegisterFormInputs>
          name="password"
          label="Password"
          register={register}
          required
          type="password"
          errors={errors}
        />

        {!!registerError && (
          <div className="alert alert-error shadow-lg mt-4">
            <span>{registerError}</span>
          </div>
        )}

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
