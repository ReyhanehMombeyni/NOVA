import type { LucideProps } from "lucide-react";
import {
  Shield as Lock,
  Mail,
  Loader2 as Spinner,
  Globe,
  Sparkles,
  User2Icon, 
  Sun,
  Moon, 
  ShoppingBag, 
  LogOut, 
  Settings,
  BadgeCheckIcon,
  LogInIcon,
  EyeIcon,
  EyeOff
} from "lucide-react";

export const Icons = {
  logo: ({ className, ...props }: LucideProps) => (
    <Sparkles
      className={`h-6 w-6 text-blue-500 ${className}`}
      fill="currentColor"
      {...props}
    />
  ),
  google: Globe,
  mail: Mail,
  lock: Lock,
  spinner: Spinner,
  user: User2Icon,
  sun: Sun,
  moon: Moon,
  shoppingBag: ShoppingBag,
  logout: LogOut,
  setting: Settings,
  badgeCheckIcon: BadgeCheckIcon,
  login: LogInIcon,
  eyeIcon: EyeIcon,
  eyeOff: EyeOff
};