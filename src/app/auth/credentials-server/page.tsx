"use client";

import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mt-6">Login</h1>

      <p className="text-center mt-4 max-w-xl">Credentials Server</p>

      <LoginForm />
    </div>
  );
}
