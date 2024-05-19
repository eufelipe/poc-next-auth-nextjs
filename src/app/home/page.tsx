import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mt-6">POC Next Auth with Next.js</h1>

      <p className="text-center mt-4 max-w-xl">
        Esta página tem como objetivo demonstrar diferentes formas de
        autenticação utilizando a biblioteca{" "}
        <a
          href="https://authjs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Next Auth
        </a>{" "}
        em uma aplicação
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {" "}
          Next.js{" "}
        </a>
        .
      </p>
      <br />
      <p className="text-center mt-2 max-w-xl">
        This page aims to demonstrate different authentication methods using the
        <a
          href="https://authjs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {" "}
          Next Auth{" "}
        </a>
        library in a
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {" "}
          Next.js{" "}
        </a>
        application.
      </p>

      <div className="mt-10 space-y-4 w-full max-w-sm">
        <Link href="/auth/credentials-template">
          <button className="btn btn-primary w-full mb-4">
            Login com Credenciais (Template Next Auth)
          </button>
        </Link>
        <Link href="/auth/credentials-client">
          <button disabled className="btn btn-primary w-full mb-4">
            Login com Credenciais (Client Component)
          </button>
        </Link>
        <Link href="/auth/credentials-server">
          <button disabled className="btn btn-primary w-full mb-4">
            Login com Credenciais (Server Component)
          </button>
        </Link>
        <Link href="/auth/magic-link">
          <button disabled className="btn btn-primary w-full mb-4">
            Magic Link
          </button>
        </Link>
        <Link href="/auth/google">
          <button disabled className="btn btn-primary w-full mb-4">
            Login Social com Google
          </button>
        </Link>
        <Link href="/auth/github">
          <button disabled className="btn btn-primary w-full mb-4">
            Login Social com Github
          </button>
        </Link>
      </div>
    </div>
  );
}
