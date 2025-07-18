import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Ezyly Hired",
  description: "Connecting the right talent with the right job",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen p-0 bg-background text-foreground">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
