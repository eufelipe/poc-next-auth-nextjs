import React from "react";

import Link from "next/link";

import { useLogin } from "./useLogin";
import { LoginFormInputs } from "./validation.scheme";

import { FormInput } from "@/app/components";

const LoginForm: React.FC = () => {
  const { onSubmit, register, errors, handleSubmit, LoginError } = useLogin();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 space-y-4 w-full max-w-sm"
      >
        <FormInput<LoginFormInputs>
          name="email"
          label="Email"
          register={register}
          required
          type="email"
          errors={errors}
        />
        <FormInput<LoginFormInputs>
          name="password"
          label="Password"
          register={register}
          required
          type="password"
          errors={errors}
        />

        {!!LoginError && (
          <div className="alert alert-error shadow-lg mt-4">
            <span>{LoginError}</span>
          </div>
        )}

        <button type="submit" className="btn btn-primary w-full">
          Entrar
        </button>
      </form>

      <p className="text-center mt-4">
        Não tem uma conta?{" "}
        <Link href="/" className="text-blue-500 underline">
          Cadastre-se
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
