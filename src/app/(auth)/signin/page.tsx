'use client'
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const Sigin = () => {

    const handleSignin = () => {
    signIn("credentials");
  };
  return (
    <div>
      Sigin page for custom
      <input type="text" ></input>
      <button className="" onCopy={()=>alert('copied')}  onClick={(e)=>{navigator.clipboard.writeText(e.target)}}>Copy text</button>
      <button className="bg-orange-200/40" onClick={handleSignin}>Sign in</button>
    </div>
  );
};

export default Sigin;
