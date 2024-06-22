import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OpenSquare = () => {
  const ref = useRef();
  const isInView = useInView(ref, {
    amount: "all",
  });
  return (
    <div ref={ref} className="flex-center relative mx-auto w-[400px] h-[400px]">
      <p className="text-center">Wooh Hooo! </p>
      <motion.div
        animate={{
          y: isInView ? "-100%" : 0,
          x: isInView ? "-100%" : 0,
        }}
        className="absolute w-[100px] h-[100px] bg-orange-500"
      ></motion.div>
      <motion.div
        animate={{
          y: isInView ? "-100%" : 0,
          x: isInView ? "100%" : 0,
        }}
        className="absolute w-[100px] h-[100px] bg-orange-500"
      ></motion.div>
      <motion.div
        animate={{
          y: isInView ? "100%" : 0,
          x: isInView ? "-100%" : 0,
        }}
        className="absolute w-[100px] h-[100px] bg-orange-500"
      ></motion.div>
      <motion.div
        animate={{
          y: isInView ? "100%" : 0,
          x: isInView ? "100%" : 0,
        }}
        className="absolute w-[100px] h-[100px] bg-orange-500"
      ></motion.div>
    </div>
  );
};

export default OpenSquare;
