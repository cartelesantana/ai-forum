import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Layout(props) {
  return (
    <SignedIn>
      <section className="section-gutter py-32">{props?.children}</section>
    </SignedIn>
  );
}
