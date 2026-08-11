import Link from "next/link";
import { LoginForm } from "../components/LoginForm";
import { GoogleButton, Icons, Seperator } from "@/components/shared";

export default function loginPage () {
  return (
  <main className="min-h-screen flex justify-center items-center bg-gray-950 p-4">
    <div className="w-full max-w-sm md:max-w-md rounded-lg bg-gray-900 shadow-lg px-4 py-8 md:px-8">
        <div className="mb-10 text-center">
          <Icons.logo className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-2 md:mt-4 text-lg md:text-2xl font-bold text-white font-heading">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-400">
            Do not have an account yet?{" "}
            <Link href='/auth/signup'
              className="font-medium text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <LoginForm />
        <Seperator />
        <GoogleButton />
    </div>
  </main>
  );
}
