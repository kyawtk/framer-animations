"use client";
import React, { useEffect, useState } from "react";
import momo from "/public/assets/images/Momo.jpg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Scare = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousedown", (e) => {
        if (e.button === 0) {
          setShow(true);
        }
      });
      window.addEventListener("mouseup", (e) => {
        if (e.button === 0) {
          setShow(false);
        }
      });
    }
    return () => {
      window.removeEventListener("mousedown", () => {});
      window.removeEventListener("mouseup", () => {});
    };
  }, []);
  if (!show) return null;
  if (show) {
    return (
      <div
        className={twMerge(
          "fixed inset-0 hidden w-full h-full bg-[rgba(0,0,0,0.5)] flex-center"
        )}
      >
        <Image src={momo} alt={"momo"} fill={true} />
      </div>
    );
  }
};

export default Scare;
