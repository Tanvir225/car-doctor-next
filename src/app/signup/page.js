'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const signupPage = () => {

  const handleSubmit =async(event)=>{
    event.preventDefault();
    const newUser = {
      name : event.target.name.value,
      email : event.target.email.value,
      password : event.target.password.value
    }
    console.log(newUser);
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
        <div>
          <Image
            width={450}
            height={400}
            src={"/assets/images/login/login.svg"}
            alt="signup"
          ></Image>
        </div>
        <div className="">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered input-primary w-full max-w-lg"
            />
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
              signup
            </button>
          </form>
          <div className=" space-y-3 my-5 ">
            {/* <p className="btn btn-primary">
              <FaFacebook></FaFacebook>
            </p>
            <p className="btn btn-primary">
              <FaGoogle></FaGoogle>
            </p> */}
            <p>
            have any account{" "}
              <Link href={"/login"} className="text-primary font-bold">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signupPage;
