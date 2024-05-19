import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type RegisterFormInputs = z.infer<typeof schema>;

export const isValidScheme = (data: any) => {
  const result = schema.safeParse(data);
  return result.success;
};
