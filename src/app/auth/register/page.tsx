"use client";

import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mt-6">Registrar</h1>

      <RegisterForm />
    </div>
  );
}
