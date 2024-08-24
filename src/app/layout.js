import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Shared/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import Footer from "./Component/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor",
  description: "this is a car doctor service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar></Navbar>
          <div className="container mx-auto w-full my-5 p-5 lg:py-5">
            {children}
          </div>
          <Footer></Footer>
          <Toaster></Toaster>
        </AuthProvider>
      </body>
    </html>
  );
}
