import { LoginDataType, SignupDataType } from "@/schema/zodSchema";
import { User } from "@/store/useUserStore";

export interface AuthResponse {
  user: User;
}

export const loginApi = async (credentials: LoginDataType): Promise<AuthResponse> => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Account login failed.");
  }

  return res.json();
};

export const signupApi = async (userData: SignupDataType): Promise<AuthResponse> => {
  const { username, email, password } = userData;
  
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Signup failed.");
  }

  return res.json();
};

export const logoutApi = async (): Promise<{ message: string }> => {
  const res = await fetch("/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Logout failed");
  }

  return res.json();
};
