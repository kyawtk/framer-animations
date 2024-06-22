import ScreenContainer from "@/app/components/ScreenContainer";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const arrr = [1, 2, 3, 4, 5];
const SlidingNav = () => {
  const [active, setActive] = useState();
  const [isRow, setIsRow] = useState(true);
  return (
    <ScreenContainer>
      <AnimatePresence mode="wait">
        <motion.nav

          className="flex gap-5"
        >
          {arrr.map((item) => (
            <motion.button
              onClick={() => {
                setIsRow((prev) => !prev);
                setActive(item);
              }}
              key={item}

              style={{
                fontSize:'16px',
                fontWeight:'normal'
              }}
              className=" relative py-2 px-4"
              layoutId={`id${item}`}
            >
              {item}

              {/* {active === item ? (
              <AnimatePresence>
                <motion.span
                  style={{ opacity: 0.5 }}
                  layoutId="underline"
                  className="absolute  inset-0 w-full h-full bg-slate-400"
                ></motion.span>
              </AnimatePresence>
            ) : null} */}
            </motion.button>
          ))}
        </motion.nav>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
          layout
            className="fixed flex-center inset-0 w-full h-full "
            onClick={() => {
              setActive(null);
            }}
          >
            <motion.p

            layoutId={`id${active}`}
             style={{
                fontSize:'50px',
                fontWeight:'semibold'
             }}
            >
              {active}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ScreenContainer>
  );
};

export default SlidingNav;
