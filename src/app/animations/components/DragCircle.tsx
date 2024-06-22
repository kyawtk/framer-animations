import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import React from "react";

const DragCircle = () => {
  const x = useMotionValue(0);
  useMotionValueEvent(x, "change", (value) => {
    console.log(value);
  });
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#19C8E5", "#ffffff", "#D41111"]
  );
  const scale = useTransform(
    x,
    [-100, 0, 100],
    [3, 1, 3]
  );
  return (
    <div className="min-h-screen flex-center">
      <motion.div
        drag="x"
        dragConstraints={{
          right: 100,
          left: -100,
        }}
        style={{ x, backgroundColor,scale }}
        className="rounded-full size-40 bg-white"
      ></motion.div>
    </div>
  );
};

export default DragCircle;
