import { Icons } from "@/components/shared";

export const menuItem= [{
    id: 1,
    text: 'Home',
    href: '/'
}, {
    id: 2,
    text: 'Products',
    href: '/products'
}, {
    id: 3,
    text: 'About Us',
    href: '/about-us'
}, {
    id: 4,
    text: 'Contact Us',
    href: '/contact-us'
}]

export const userNavItems = [
  {
    id: 1,
    title: "Account",
    href: "/profile",
    icon: Icons.user,
  },
  {
    id: 2,
    title: "My Orders",
    href: "/orders",
    icon: Icons.shoppingBag,
  },
];