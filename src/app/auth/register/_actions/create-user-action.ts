"use server";

import { RegisterFormInputs } from "../validation.scheme";

export default async function createUserAction(data: RegisterFormInputs) {
  console.log("create user", data);
}
