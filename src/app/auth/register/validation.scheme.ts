import { z } from "zod";

export const schema = z.object({
  Name: z.string().min(1, "Name is required"),
  Email: z.string().email("Invalid email address"),
  Password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type RegisterFormInputs = z.infer<typeof schema>;
