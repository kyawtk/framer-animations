import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const SunandBall = () => {
  const targetRef = useRef();
  const sunRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: scrollYProgressSun } = useScroll({
    target: sunRef,
    offset: ["start end", "end start"],
  });
  const position = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);
  const scale = useTransform(scrollYProgressSun, [0, 1], [1, 9]);
  return (
    <div className="  ">
      <motion.div className="bg-green-900 relative flex-center min-h-screen">
        <motion.div
          ref={sunRef}
          style={{ scale }}
          className="bg-orange-600  rounded-full size-10 absolute shadow-2xl shadow-orange-500"
        ></motion.div>
        <motion.div
          style={{ left: position }}
          className="rounded-full bottom-0  absolute bg-white shadow-2xl size-10 shadow-white"
          ref={targetRef}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default SunandBall;
