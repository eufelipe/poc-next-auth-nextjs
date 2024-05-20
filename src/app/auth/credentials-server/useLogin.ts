import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginFormInputs, schema } from "./validation.scheme";
import { useRouter } from "next/navigation";
import authenticateAction from "./_actions/authenticate-action";

export const useLogin = () => {
  const [LoginError, setLoginError] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      setLoginError("");

      await authenticateAction(data);

      router.push("/");
    } catch (error: any) {
      setLoginError(error?.message ?? "Cannot authenticate user");
    }
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    LoginError,
  };
};
