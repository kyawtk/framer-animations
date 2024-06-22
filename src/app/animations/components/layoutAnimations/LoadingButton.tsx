"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ScreenContainer from "@/app/components/ScreenContainer";

const buttonCopy = {
  idle: "Send me a login link",
  loading: "Spinning .....",
  success: "Login link sent!",
};

export default function SmoothButton() {
  const [buttonState, setButtonState] = useState("idle");

  return (
    <ScreenContainer >
     
        <button
        style={{overflow:'hidden'}}
          className="bg-blue-500 rounded-lg z-10 overflow-hidden flex-center py-1 px-4 min-w-[300px]"
          disabled={buttonState !== "idle"}
          onClick={() => {
            // This code is just a placeholder
            setButtonState("loading");

            setTimeout(() => {
              setButtonState("success");
            }, 1750);

            setTimeout(() => {
              setButtonState("idle");
            }, 3500);
          }}
        >
          <AnimatePresence
            mode="popLayout"
            initial={false}

          >
            <motion.span
              transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              key={buttonState}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 25, opacity: 0 }}
              style={{overflow:'hidden'}}
            >
              {buttonCopy[buttonState]}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </ScreenContainer>
  );
}
