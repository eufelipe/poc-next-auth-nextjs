"use server";

import { signIn } from "@/auth";
import { LoginFormInputs, isValidScheme } from "../validation.scheme";

export default async function authenticateAction(data: LoginFormInputs) {
  if (!isValidScheme(data)) {
    throw new Error("Invalid data");
  }

  try {
    const { email, password } = data;

    await signIn("credentials", { email, password });
  } catch (error) {
    throw new Error(
      "Invalid email or password. Please try again or contact support."
    );
  }
}
