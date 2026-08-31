"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"; // استفاده از react-toastify

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  Button,
} from "@/components/ui";
import { Icons } from "../shared";
import { userNavItems } from "@/constant";
import { useUserStore } from "@/store/useUserStore";
import { logoutApi } from "@/services/authApi";

export const UserMenu = () => {
  const router = useRouter();
  const { user, isAuthenticated, clearUser } = useUserStore();

  const handleLogout = async () => {
    try {
      await logoutApi();
      clearUser();
      
      toast.success('LogOut Proccess Successfuly!');

      router.push("/");
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error Logging Out Of Account!";
      toast.error(message);
    }
  };

  if (!isAuthenticated || !user) {
    return (
      <Button variant="default" size="sm">
        <Link href="/auth/login" className="flex items-center gap-2 h-9">
          <Icons.login className="h-4 w-4" />
          <span>Login</span>
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-9 w-9 bg-primary text-primary-foreground flex justify-center items-center font-semibold cursor-pointer">
          {user.username ? user.username.slice(0, 2).toUpperCase() : "U"}
        </Avatar>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {userNavItems.map(({ id, title, href, icon: Icon }) => (
            <DropdownMenuItem key={id}>
              <Link
                href={href}
                className="cursor-pointer flex items-center gap-2 w-full p-2"
              >
                <Icon className="h-4 w-4" />
                <span>{title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-destructive focus:text-destructive flex items-center gap-2 p-2"
        >
          <Icons.logout className="h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};