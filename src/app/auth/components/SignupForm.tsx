'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Icons } from "@/components/shared";
import { Button, Input, Label } from "@/components/ui";
import { useAuth } from "@/hooks/auth/useAuth";
import { SignupDataType, SignupSchema } from "@/schema/zodSchema";
import { signupApi } from "@/services/authApi";

export const SignupForm = () => {

  const [isHide, setIsHide] = useState(true);

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
                className="pl-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            </div>
            {errors.username && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.username.message}</p>
          )}
          </div>
          <div className="pt-4">
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
                className="pl-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            </div>
            {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.email.message}</p>
            )}
          </div>
          
        <div className="w-full flex flex-col md:flex-row items-center gap-4 pt-4">
          <div className="w-full">
            <Label htmlFor="password" className="text-gray-100">
              Password
            </Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.lock className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="password"
                type={isHide ? "password" : "text"}
                {...register("password")}
                placeholder="••••••••"
                className="pl-10 pr-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            <button type="button" onClick={() => setIsHide(!isHide)} className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer">
              {
                isHide ? <Icons.eyeIcon className="h-4 w-4 text-gray-400" /> : <Icons.eyeOff className="h-4 w-4 text-gray-400" />
              }
              
            </button>
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="confirmPassword" className="text-gray-100">
              Confirm Password
            </Label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icons.lock className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="confirmPassword"
                type={isHide ? "password" : "text"}
                {...register("confirmPassword")}
                placeholder="••••••••"
                className="pl-10 pr-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-xs sm:placeholder:text-sm placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                disabled={isPending}
              />
            <button type="button" onClick={() => setIsHide(!isHide)} className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer">
              {
                isHide ? <Icons.eyeIcon className="h-4 w-4 text-gray-400" /> : <Icons.eyeOff className="h-4 w-4 text-gray-400" />
              }
              
            </button>
            </div>
          </div>
        </div>
          {errors.password && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.password.message}</p>
          )
          }
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs sm:text-sm">{errors.confirmPassword.message}</p>
          )}
        <Button
          type="submit"
          className={`my-4 w-full h-10 focus:ring-blue-500 ${isPending ? "bg-blue-400 text-gray-300 hover:bg-blue-400" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          Signup
        </Button>
        {isError && <div className="text-red-500 text-xs sm:text-sm">{error.message}</div>}
      </div>
    </form>
  );
};
