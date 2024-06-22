import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const divs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const HorizontalScrol = () => {
  

  const target = useRef();

  const { scrollYProgress } = useScroll({ target });

  const xSpring = useSpring(scrollYProgress, { bounce: 0.1 });

  const x = useTransform(xSpring, [0, 1], ["0%", "-100%"]);

 

  return (
    <div ref={target} className="min-h-[300vh]">
      <div className="bg-purple-500 flex items-center  h-screen sticky top-0  overflow-hidden  ">
       
        <motion.div style={{ x }} className="flex items-center gap-3">
          {" "}
          {divs.map((item) => (
            <motion.div
              key={item}
              className="bg-white min-w-[35vw] rounded-2xl h-40 flex-center "
            >
              <p className="text-black">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrol;
