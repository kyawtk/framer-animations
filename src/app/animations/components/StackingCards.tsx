import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

const StackingCards = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref  });
  const width = useTransform(scrollYProgress, [0, 1], ["80%", "50%"]);
  const width2 = useTransform(scrollYProgress, [0, 1], ["80%", "55%"]);
  const width3 = useTransform(scrollYProgress, [0, 1], ["80%", "60%"]);
  const width4 = useTransform(scrollYProgress, [0, 1], ["80%", "65%"]);

  return (
    <motion.div ref={ref} className="relative flex flex-col gap-5">
      <motion.div
    
        style={{ width
         }}
        className="sticky top-2 bg-blue-500 h-[80vh] w-[80%] mx-auto rounded-2xl"
      ></motion.div>
      <motion.div
        style={{ width:width2 }}
        
        className="sticky top-6 bg-red-500 h-[80vh] w-[80%] mx-auto rounded-2xl"
      ></motion.div>
      <motion.div
        style={{ width:width3}}
        className="sticky top-10 bg-green-500 h-[80vh] w-[80%] mx-auto rounded-2xl"
      ></motion.div>
      <motion.div
        style={{ width :width4 }}
        className="sticky top-14 bg-orange-500 h-[80vh] w-[80%] mx-auto rounded-2xl"
      ></motion.div>
      <motion.div
        className="sticky top-16 bg-purple-500 h-[80vh] w-[80%] mx-auto rounded-2xl"
      ></motion.div>
    </motion.div>
  );
};

export default StackingCards;
