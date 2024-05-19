import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="text-4xl font-bold mt-6">POC Next Auth with Next.js</h1>

      <p className="text-center mt-4 max-w-xl">
        Esta página tem como objetivo demonstrar diferentes formas de
        autenticação utilizando a biblioteca Next Auth em uma aplicação Next.js.
      </p>
      <p className="text-center mt-2 max-w-xl">
        This page aims to demonstrate different authentication methods using the
        Next Auth library in a Next.js application.
      </p>

      <div className="mt-10 space-y-4 w-full max-w-sm">
        <Link href="/auth/credentials-template">
          <button className="btn btn-primary w-full mb-4">
            Login com Credenciais (Template Next Auth)
          </button>
        </Link>
        <Link href="/auth/credentials-client">
          <button className="btn btn-primary w-full mb-4">
            Login com Credenciais (Client Component)
          </button>
        </Link>
        <Link href="/auth/credentials-server">
          <button className="btn btn-primary w-full mb-4">
            Login com Credenciais (Server Component)
          </button>
        </Link>
        <Link href="/auth/magic-link">
          <button className="btn btn-primary w-full mb-4">Magic Link</button>
        </Link>
        <Link href="/auth/google">
          <button className="btn btn-primary w-full mb-4">
            Login Social com Google
          </button>
        </Link>
        <Link href="/auth/github">
          <button className="btn btn-primary w-full mb-4">
            Login Social com Github
          </button>
        </Link>
      </div>
    </div>
  );
}
