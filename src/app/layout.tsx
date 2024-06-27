import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { Inter as FontSans } from "next/font/google";

// components
import { Header } from "@/components/header/header";

// utils
import { cn } from "@/lib/utils";

// styles
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Typescript - Design Patterns",
  description:
    "This application provides examples of various design patterns implemented in TypeScript.",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
