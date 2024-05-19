import NextAuth from "next-auth";

import { Providers } from "@/auth/providers";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Providers.CredentialsNextAuth],
});
