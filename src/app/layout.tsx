import type { Metadata } from "next";
import { Roboto, Montserrat, Roboto_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import { QueryProvider, ThemeProvider } from "@/providers";

const robotoSans = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

// const vazirmatn = Vazirmatn({
//   variable: "--font-vazirmatn",
//   subsets: ["arabic", "latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "NOVA",
  description: "NOVA  E-Commerce Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} ${montserrat.variable} ${robotoMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          <QueryProvider>
            {children}
            <ToastContainer />
          </QueryProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
