"use client";
import React, { useState } from "react";
import img from "public/assets/images/user1.png";
import Image from "next/image";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  MotionConfig,
} from "framer-motion";

const users = [
  { name: "Marry Cindy", img: "/assets/images/user1.png" },
  { name: "Luther Hixenberg", img: "/assets/images/user2.png" },
  { name: "Grogry Jonas", img: "/assets/images/user3.png" },
  { name: "Marry Cidy", img: "/assets/images/user1.png" },
  { name: "Myint Myint Khin", img: "/assets/images/user2.png" },
  { name: "City Express", img: "/assets/images/user3.png" },
  { name: "Max Jone", img: "/assets/images/user1.png" },
  { name: "Coann Doyle", img: "/assets/images/useres2.png" },
  { name: "Birrity Spear", img: "/assets/images/user3.png" },
  { name: "Hicake Donjabi", img: "/assets/images/user1.png" },
  { name: "Yoolwoi Mlaiawi", img: "/assets/images/user2.png" },
  { name: "Thomas Tome", img: "/assets/images/user3.png" },
];
const ChatBubble = () => {
  const [activeUser, setactiveUser] = useState(null);
  return (
    <MotionConfig
      transition={{
    //    duration:0.15,


      
      }}
    >
      <div className="min-h-screen relative  flex  p-5">
        <div className="flex flex-col py-3 px-4 rounded-2xl min-w-[500px] bg-white text-black">
          <h2 className="font-semibold text-3xl mb-3">Message List 🍰</h2>{" "}
          <AnimatePresence>
            {users.map((user) => {
              return (
                <motion.button
                  layoutId={`wrapper-${user.name}`}
                  onClick={() => setactiveUser(user)}
                  whileHover={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex justify-between px-4 py-2 rounded-2xl bg-white"
                  key={user.name}
                >
                  <div className="flex items-center gap-3">
                    <motion.img
                      layoutId={`user-img-${user.name}`}
                      className=" object-cover w-[50px] h-[50px]"
                      style={{
                        borderRadius: "300px",
                      }}
                      src={user.img}
                      alt="user"
                    />
                    <div className="flex flex-col">
                      <motion.span
                        layoutId={`user-name-${user.name}`}
                        className="font-semibold text-lg"
                      >
                        {user.name}
                      </motion.span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {activeUser && (
            <motion.div
              className="absolute  top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] "
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              exit={{
                opacity: 1,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeUser && (
            <motion.div
              drag
              className="flex  items-end z-10 fixed    top-10 left-10 h-screen  flex-col gap-3"
            >
              <motion.img
                layoutId={`user-img-${activeUser.name}`}
                onClick={() => setactiveUser(null)}
                src={activeUser?.img}
                alt="user"
                className="object-cover"
                style={{
                  borderRadius: "300px",
                  width: "50px",
                  height: "50px",
                }}
              ></motion.img>
              <motion.div
                layoutId={`wrapper-${activeUser?.name}`}
                className="bg-white rounded-2xl px-3 py-2 text-black overflow-hidden "
                style={{
                  width: "450px",
                  height: "50vh",
                }}
              >
                <motion.p
                  className="text-right font-semibold text-lg "
                  layoutId={`user-name-${activeUser?.name}`}
                >
                  {activeUser?.name}
                </motion.p>
                <button>Click me</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default ChatBubble;
