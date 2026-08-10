import Link from "next/link";

import { Logo, ThemeToggle } from "../shared";
import { menuItem } from "@/constant";
import { UserMenu } from "./userMenu";



export const Navbar = () => {
    return(
        <nav className="p-5 shadow-sm dark:shadow-slate-900 w-full">
            <div className="flex items-center justify-between space-x-1">
                <Logo />
                <div className="hidden md:block">
                    <ul className="flex items-center space-x-1">
                        {
                            menuItem.map(({id, text, href}) => <li key={id} className="md:px-5"><Link href={href}>{text}</Link></li>)
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <UserMenu />
                </div>
            </div>
            <div className="md:hidden w-full">
                <ul className="flex justify-center items-center space-x-1 pt-4">
                        {
                            menuItem.map(({id, text, href}) => <li key={id} className="px-3"><Link href={href}>{text}</Link></li>)
                        }
                    </ul>
            </div>
        </nav>
    );
}