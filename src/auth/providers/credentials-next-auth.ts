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

  authorize() {
    return {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    };
  },
});
