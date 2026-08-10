import { Icons } from "@/components/shared/Icons";
import { SignupForm } from "../components/SignupForm";
import { GoogleButton, Seperator } from "@/components/shared";
import Link from "next/link";

export default function signupPage() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-950 p-4">
      <div className="w-full max-w-md md:max-w-lg ronded-lg bg-gray-900 shadow-lg p-8">
        <div className="mb-3 md:mb-6 text-center">
          <Icons.logo className="mx-auto h-12 w-12" />
          <h2 className="mt-2 md:mt-4 text-lg md:text-2xl font-bold text-white">
            Welcome to NOVA
          </h2>
        </div>
        <SignupForm />
        <p className="mt-2 text-sm text-gray-400 text-center">
          Do have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
        <Seperator />
        <GoogleButton />
      </div>
    </main>
  );
}

//  <div className="min-h-screen flex justify-center items-center bg-gray-950 p-4">
//     <div className="w-full max-w-sm md:max-w-md rounded-lg bg-gray-900 shadow-lg p-8">
//         <div className="mb-3 md:mb-6 text-center">
//           <Icons.logo className="mx-auto h-12 w-12 text-blue-500" />
//           <h2 className="mt-2 md:mt-4 text-lg md:text-2xl font-bold text-white">Welcome Back</h2>
//           <p className="mt-2 text-sm text-gray-400">
//             Do not have an account yet?{" "}
//             <Link href='/auth/signup'
//               className="font-medium text-blue-500 hover:underline"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//         <LoginForm />
//     </div>
