import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ParallaxBg = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const bg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]
  );
  return (
    
      <div ref={ref} className="h-[130vh] relative overflow-hidden  grid place-items-center">
        <motion.h1
          style={{ y: bg  }}
          className="z-10 absolute -mt-32  font-bold text-white text-[5rem]"
        >
          TRANQUILITY
        </motion.h1>

        <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url('/assets/images/imgbottom.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          

        }}
      ></div>
        <motion.div
          className="absolute inset-0 z-10"
          style={{  y: bg }}
        ></motion.div>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/images/imgFull.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            y: bg,
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
      </div>
   
  );
};

export default ParallaxBg;
