"use client";

import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mt-6">Registrar</h1>

      <form className="mt-10 space-y-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
        />
        <button className="btn btn-primary w-full mb-4">Registrar</button>
      </form>

      <p className="text-center mt-4">
        Já tem uma conta?{" "}
        <Link href="/" className="text-blue-500 underline">
          Faça login
        </Link>
      </p>
    </div>
  );
}
