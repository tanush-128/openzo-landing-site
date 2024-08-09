import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "./navbar/page";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Openzo",
  description:
    "The super app for your locality powered with digitisation of local businesses",
  icons: [{ rel: "icon", url: "./favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className + " overflow-x-clip"}>
        <Navbar />

        {children}
        {/* <div className="parallax"></div> */}
      </body>
    </html>
  );
}
