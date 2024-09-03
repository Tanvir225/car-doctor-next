"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignIn from "../Component/Shared/SocialSignIn";

const LoginPage = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/"
    });
    console.log(response);
    if (response?.status === 200) {
      event.target.reset();
      // router.push("/");
      toast.success("login successfully!");
    }
    if (response?.status === 401 || response?.status === 403) {
      toast.error("incorrect email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
        <div>
          <Image
            width={500}
            height={300}
            src={"/assets/images/login/login.svg"}
            alt="login"
          ></Image>
        </div>
        <div className="border border-gray-100 p-10  rounded-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold">Login</h1>
            <input
              type=" email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full max-w-lg"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered input-primary w-full max-w-lg"
            />
            <button className="btn btn-primary btn-outline w-full max-w-lg">
              Login
            </button>
          </form>
          <div className="text-center space-y-3 my-5 space-x-5">
            <SocialSignIn></SocialSignIn>
            <p>
              dont have any account{" "}
              <Link href={"/signup"} className="text-primary font-bold">
                signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
