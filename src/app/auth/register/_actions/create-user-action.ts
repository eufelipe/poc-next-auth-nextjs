"use server";

import { hash } from "bcryptjs";

import db from "@/lib/db";
import { RegisterFormInputs, isValidScheme } from "../validation.scheme";

export default async function createUserAction(data: RegisterFormInputs) {
  try {
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

    const hashedPassword = await hash(password, 10);

    await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
  } catch (error) {
    throw new Error("Cannot create user on db");
  }
}
