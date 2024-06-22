import { animate, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const SpotButton = () => {
  const btnRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offsetX = e.offsetX;

      const left = `${(offsetX / width) * 100}%`;

      console.log("🚀 ~ handleMouseMove ~ left:", left);
      ballRef.current.animate(
        { left: left },
        {
          duration: 250,
          fill: "forwards",
        }
      );
    };
    const handleMouseLeave = (e) => {
      ballRef.current.animate(
        { left: "50%" },
        {
          duration: 100,
          fill: "forwards",
          bounce:false,

        }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="w-[300px]  p-2 overflow-hidden  rounded-full mx-auto h-[50px] bg-orange-500 relative"
    >
      <span className="relative z-10 mix-blend-difference pointer-events-none">
        Click me
      </span>

      <span
        ref={ballRef}
        className="rounded-full pointer-events-none bg-white size-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      ></span>
    </button>
  );
};

export default SpotButton;
