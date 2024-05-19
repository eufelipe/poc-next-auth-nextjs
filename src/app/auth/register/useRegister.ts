import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterFormInputs, schema } from "./validation.scheme";

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log(data);
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
};
