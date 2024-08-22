import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { Suspense } from "react";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rick&Morty",
  description: "Rick&Morty app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],

  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "public/logos/rick48.png" },
    { rel: "icon", url: "public/logos/rick48.png" },
  ],
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
              <main>{children}</main>
            </ThemeProvider>
          </Suspense>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
