'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label, Input, Button } from "@/components/ui";
import { Icons } from "@/components/shared";
import { LoginDataType, LoginSchema } from "@/schema/zodSchema";
import { loginApi } from "@/services/authApi";
import { useAuth } from "@/hooks/auth/useAuth";

export const LoginForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur',
  });

  const { isPending, isError, error, mutate } = useAuth({
    apiCall: loginApi,
    onSuccessCallback: () => reset(),
    onErrorCallback() {
      setValue('password', '');
    },
  })
  
  const onSubmit = (user: LoginDataType) => {
    mutate(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div className="space-y-4">
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
              {...register("identifier")}
              placeholder="email@email.com"
              className="pl-10 h-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
              disabled={isPending}
            />
          </div>
          {errors.identifier && (
            <p className="text-red-500">{errors.identifier.message}</p>
          )}
        </div>
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
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className={`w-full h-10 focus:ring-blue-500 ${isPending ? "bg-blue-400 text-gray-300 hover:bg-blue-400" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          {isPending ? "Login..." : "Login"}
        </Button>
        {isError && <div className="text-red-500">{error.message}</div>}
      </div>
    </form>
  );
};
