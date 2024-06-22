import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const WheelPicker = () => {
  const target = useRef();
  const { scrollYProgress } = useScroll({ target });
  const scale = useTransform(scrollYProgress,[0,1],[]);
  return (
    <div className="min-h-screen flex-center">
      <div ref={target} className="h-[50vh] flex-col flex-center">
        {options.map((item) => (
          <motion.p key={item} className=" rounded-full  p-5">
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default WheelPicker;
