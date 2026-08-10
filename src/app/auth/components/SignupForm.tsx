'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Icons } from "@/components/shared";
import { Button, Input, Label } from "@/components/ui";
import { useAuth } from "@/hooks/auth/useAuth";
import { SignupDataType, SignupSchema } from "@/schema/zodSchema";
import { signupApi } from "@/services/authApi";

export const SignupForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  }= useForm<SignupDataType>({
    resolver: zodResolver(SignupSchema),
    mode: 'onBlur',
  })

  const {isPending, isError, error, mutate}= useAuth({
    apiCall: signupApi,
    onSuccessCallback: () => reset(),
  })

  const onSubmit= (user: SignupDataType) => {
    mutate(user);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div>
        <div className="flex items-center gap-4">
          <div>
            <Label htmlFor="username" className="text-gray-100">
              UserName
            </Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.user className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="username"
                type="text"
                {...register("username")}
                placeholder="your username..."
                className="pl-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-100">
              Email address
            </Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.mail className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="email@email.com"
                required
                className="pl-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            </div>
          </div>
        </div>
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        <div className="flex items-center gap-4 pt-4">
          <div>
            <Label htmlFor="password" className="text-gray-100">
              Password
            </Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.lock className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="••••••••"
                className="pl-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="confirmPassword" className="text-gray-100">
              Confirm Password
            </Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.lock className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
                placeholder="••••••••"
                className="pl-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            </div>
          </div>
        </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        <Button
          type="submit"
          className={`my-4 w-full h-10 focus:ring-blue-500 ${isPending ? "bg-blue-400 text-gray-300 hover:bg-blue-400" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          Signup
        </Button>
        {isError && <div className="text-red-500">{error.message}</div>}
      </div>
    </form>
  );
};
