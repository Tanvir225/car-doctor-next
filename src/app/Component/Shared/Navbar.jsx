"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const session = useSession();
  // console.log(session);

  return (
    <div className=" container mx-auto mt-2">
      <div className="navbar w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-300  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((link, index) => (
                <li className="border-b-2 my-1 border-b-orange-600" key={index}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={70}
              height={70}
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center">
          <div className="flex justify-center items-center gap-5 font-semibold ">
            {links.map((link, index) => (
              <p key={index} className="border-b-2 border-b-orange-600">
                <Link href={link.link}>{link.name}</Link>
              </p>
            ))}
          </div>
        </div>
        <div className="navbar-end space-x-5">
          <button className="btn btn-primary btn-outline">
            <FaShoppingBag></FaShoppingBag>
          </button>
          <Link href={"/appoinment"} className="hidden lg:block">
            <button className="btn btn-primary btn-outline w-24 lg:w-32">
              Appoinment
            </button>
          </Link>
          {!session?.data ? (
            <Link href={"/login"}>
              <button className="btn btn-primary w-24 lg:w-32">Login</button>
            </Link>
          ) : (
            <div className="flex justify-center items-center gap-5">
              <Image
                src={session?.data?.user?.image}
                height={60}
                width={60}
                className="rounded-full"
                alt={session?.data?.user?.name}
                unoptimized
              ></Image>
              <button
                onClick={() => signOut(toast.success("logout successfully"))}
                className="btn btn-primary w-24 lg:w-28"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Services",
    link: "/services",
  },
];

export default Navbar;
