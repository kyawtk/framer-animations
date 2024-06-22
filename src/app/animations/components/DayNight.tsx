import {
  animate,
  motion,
  useAnimate,
  useAnimationControls,
} from "framer-motion";
import React, { useRef } from "react";

const DayNight = () => {
  const control = useAnimationControls();
  const [scope, animate] = useAnimate();
  const handleNight = () => {
    animate("#globe", {
      rotate: "90deg",

      transition: { duration: "5s" },
    });
  };
  const handleDay = () => {
    animate("#globe", {
      rotate: "0deg",
    });
  };
  return (
    <div
      ref={scope}
      className="min-h-screen relative flex-center overflow-hidden"
    >
      <motion.div
        id="globe"
        className="rounded-full w-[80vh] origin-center h-[80vh]  bg-white"
      >
        <div className="rounded-full bg-white  size-10"></div>
      </motion.div>
      <div className="absolute bottom-0 text-orange-400 left-1/2 -translate-x-1/2">
        <button onClick={handleNight}>Night</button>
        <button onClick={handleDay}>Day</button>
      </div>
    </div>
  );
};

export default DayNight;
