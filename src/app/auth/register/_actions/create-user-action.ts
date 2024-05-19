"use server";

import db from "@/lib/db";
import { RegisterFormInputs, isValidScheme } from "../validation.scheme";

export default async function createUserAction(data: RegisterFormInputs) {
  if (!isValidScheme(data)) {
    throw new Error("Invalid data");
  }

  const { name, email, password } = data;

  const alreadyExist = await db.user.findFirst({
    where: {
      email,
    },
  });

  if (alreadyExist) {
    throw new Error("User already exist");
  }

  await db.user.create({
    data: {
      email,
      password,
      name,
    },
  });
}
