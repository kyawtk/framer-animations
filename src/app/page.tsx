"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Scare from "./animations/components/Scare";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeChange from "./components/ThemeChange";
export default function Home() {
  const session = useSession();
  console.log("🚀 ~ Home ~ session:", session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Link href={"/animations"}>Animations</Link>
    <ThemeChange/>
        {session?.status == "authenticated" ? (
          <button onClick={() => signOut()}>Log out</button>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}

        {/* <Scare/> */}
      </div>
    </main>
  );
}
