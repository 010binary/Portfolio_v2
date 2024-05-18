import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alpha | Portfolio",
  description: "This is a portfoilo to showcase my skills in web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-auto scrollbar-w-5 scrollbar-track-transparent scrollbar-thumb-primary-color hover:scrollbar-thumb-black"`}>{children}</body>
    </html>
  );
}
