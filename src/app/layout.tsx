import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { Inter as FontSans } from "next/font/google";

// providers
import { ThemeProvider } from "@/providers/theme/theme";

// components
import { Header } from "@/components/header/header";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";

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
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Separator className="my-4" />
          <main className="container mx-auto">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
