'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const loginPage = () => {

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const loginUser = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    console.log(loginUser);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
        <div>
          <Image
            width={450}
            height={400}
            src={"/assets/images/login/login.svg"}
            alt="login"
          ></Image>
        </div>
        <div className="">
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
            <p className="btn btn-primary"><FaFacebook ></FaFacebook></p>
            <p className="btn btn-primary"><FaGoogle ></FaGoogle></p>
            <p>dont have any account <Link href={"/signup"} className="text-primary font-bold">signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
