import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterFormInputs, schema } from "./validation.scheme";
import createUserAction from "./_actions/create-user-action";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const [registerError, setRegisterError] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      setRegisterError("");
      await createUserAction(data);

      router.push("/");
    } catch (error: any) {
      setRegisterError(error?.message ?? "Cannot create user");
    }
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    registerError,
  };
};
