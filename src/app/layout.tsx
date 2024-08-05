import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { Suspense } from "react";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rick&Morty",
  description: "Rick&Morty app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryClientProvider>
          <Suspense>
            <ThemeProvider>
              <Header />
              <main>{children}</main>\
            </ThemeProvider>
          </Suspense>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
