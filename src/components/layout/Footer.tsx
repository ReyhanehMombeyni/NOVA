import Link from "next/link";
import { Logo } from "../shared";

const menu= [{
    id: 1,
    text: "About Us",
    href: '/products'
}, {
    id: 2,
    text: "Contact with Us",
    href: '/products'
}, {
    id: 3,
    text: "FAQ",
    href: '/products'
}, {
    id: 4,
    text: "Privacy Policy",
    href: '/products'
}, {
    id: 5,
    text: "Terms & Conditions",
    href: '/products'
}];

export const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer className="w-full border-t p-5">
            <div className="flex flex-col items-center gap-10 text-center my-10">
                <ul className="flex items-center gap-5 md:gap-10 text-xs md:text-sm xl:text-base xl:gap-15 font-heading font-medium">
                    {menu.map(({id, text, href}) => <li key={id}>
                        <Link href={href}>{text}</Link>
                        </li>)}
                </ul>
                <p className="text-sm font-mono xl:max-w-xl xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quae ut sit molestiae expedita nemo blanditiis. Libero quos ut a, at sint sequi atque, aperiam qui labore assumenda, vitae repudiandae?</p>
                <Logo />
            </div>
            <div className="border-t text-center pt-5 text-xs">
                &copy; { year } NOVA. All rights reserved.
            </div>
        </footer>
    );
}