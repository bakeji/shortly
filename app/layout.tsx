import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   display: "swap",
    subsets: ["latin"],
    variable: "--font-poppins",
  weight:["400", "500", "700", "800"]
});

export const metadata: Metadata = {
  title: "shortly",
  description: "shorten your links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
