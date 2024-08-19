"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialSignIn = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const handelMedia = async (provider) => {
    // console.log(provider);
    const response = await signIn(provider, {
      redirect: false,
    });
  };

 if(session?.status==='authenticated') {
    router.push('/')
 }

  return (
    <div className="space-x-5">
      <button
        onClick={() => handelMedia("facebook")}
        className="btn btn-primary"
      >
        <FaFacebook></FaFacebook>
      </button>
      <button onClick={() => handelMedia("google")} className="btn btn-primary">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialSignIn;
