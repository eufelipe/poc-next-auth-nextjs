import db from "@/lib/db";
import UserService from "@/services/user.service";
import Credentials from "next-auth/providers/credentials";

export default Credentials({
  credentials: {
    email: {
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
    password: {
      label: "Password",
      type: "password",
      placeholder: "Password",
    },
  },

  async authorize(credentials) {
    const email = String(credentials.email);
    const password = String(credentials.password);

    const user = await UserService.authorize({
      email,
      password,
    });

    return user;
  },
});
