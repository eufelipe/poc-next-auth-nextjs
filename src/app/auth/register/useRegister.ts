import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterFormInputs, schema } from "./validation.scheme";
import createUserAction from "./_actions/create-user-action";

export const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    console.log(data);

    await createUserAction(data);
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
};
