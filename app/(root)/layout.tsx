import GeneralLayout from "@/src/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GeneralLayout>{children}</GeneralLayout>;
}
