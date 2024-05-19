import db from "@/lib/db";
import { User } from "@prisma/client";
import { compareSync } from "bcryptjs";

export type AuthorizeProps = {
  email: string;
  password: string;
};

const authorize = async ({
  email,
  password,
}: AuthorizeProps): Promise<User | null> => {
  if (!email) {
    return null;
  }

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  const matches = compareSync(password, user.password);

  if (!matches) {
    return null;
  }

  return user;
};

export default { authorize };
