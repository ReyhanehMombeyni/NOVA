'use client';

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';

import { AuthResponse } from "@/services/authApi";
import { useUserStore } from "@/store/useUserStore";

type UseAuthProps<TData extends AuthResponse, TVariables> = {
  apiCall: (variables: TVariables) => Promise<TData>;
  onSuccessCallback?: () => void;
  onErrorCallback?: (error?: Error) => void;
};

export const useAuth = <TData extends AuthResponse, TVariables>({
  apiCall,
  onSuccessCallback,
  onErrorCallback
}: UseAuthProps<TData, TVariables>) => {
  
  const router= useRouter();
    const setUser= useUserStore((state) => state.setUser)

    return useMutation({
    mutationFn: apiCall,
    onSuccess: (data) => {  
      setUser(data.user);  
      toast.success('Process is Succesfuly!');
      if (onSuccessCallback) {
        onSuccessCallback();
      }
      router.push("/");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "An Error Occur! Please Try Again!");

      if (onErrorCallback) {
        onErrorCallback(error);
      }
    },
  });

}
