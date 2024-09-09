import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const montserrat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "Africa AI Forum",
  description: "A forum to promote AI around AFRICA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.className} overflow-x-hidden`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
