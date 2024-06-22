import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const MoveToTrash = () => {
  const [trash, setTrash] = useState([]);
  const [good, setGood] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleGood = (g) => {
    setGood((prev) => prev.filter((old) => old != g));
    setTrash((prev) => [...prev, g]);
  };
  const handleTrash = (t) => {
    setTrash((prev) => prev.filter((old) => old != t));
    setGood((prev) => [...prev, t]);
  };
  return (
    <div className="grid grid-cols-1 place-items-center min-h-screen text-2xl  ">
      <div className="flex flex-col flex-center gap-10">
        <p>Player</p>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {good.map((g) => {
              return (
                <motion.button
                  layoutId={g}
                  key={g}
                  onClick={() => handleGood(g)}
                  className="aspect-square flex-center rounded-lg  bg-cyan-500 w-12 h-20"
                >
                  {g}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col flex-center gap-10">
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {trash.map((t) => {
              return (
                <motion.button
                  layoutId={t}
                  key={t}
                  onClick={() => handleTrash(t)}
                  className="aspect-square flex-center rounded-lg bg-red-500 w-12 h-20"
                >
                  {t}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
        <p>Dealer </p>
      </div>
    </div>
  );
};

export default MoveToTrash;
