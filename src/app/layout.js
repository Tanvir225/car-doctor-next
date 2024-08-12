import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "this is a car doctor service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="container mx-auto h-screen w-full my-5 p-5 lg:p-0">{children}</div>
      </body>
    </html>
  );
}
