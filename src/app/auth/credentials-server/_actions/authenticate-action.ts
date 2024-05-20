"use server";

import { LoginFormInputs, isValidScheme } from "../validation.scheme";

export default async function authenticateAction(data: LoginFormInputs) {
  if (!isValidScheme(data)) {
    throw new Error("Invalid data");
  }

  const { email, password } = data;
}
