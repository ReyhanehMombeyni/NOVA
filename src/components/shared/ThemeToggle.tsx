'use client';

import { useTheme } from "next-themes";

import { Button } from "@/components/ui";
import { Icons } from "@/components/shared";
import { useIsMounted } from "@/hooks/useIsMounted";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <Button className="w-9 h-9 rounded-full" disabled size="icon" variant="outline" />
    );
  }

  return (
    <Button
      onClick={() =>
        setTheme(
          theme === "dark" || (theme === "system" && resolvedTheme === "dark")
            ? "light"
            : "dark",
        )
      }
      size="icon"
      variant="outline"
      className="w-9 h-9 rounded-full"
    >
      {resolvedTheme === "dark" || theme === "dark" ? (
        <Icons.sun className="h-4 w-4 transition-all" />
      ) : (
        <Icons.moon className="h-4 w-4 transition-all" />
      )}
    </Button>
  );
};
