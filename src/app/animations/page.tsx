"use client";

import { useRef, useState } from "react";
import OpenSquare from "./components/OpenSquare";
import Space from "./components/Space";
import {
  motion,
  useAnimate,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import SunandBall from "./components/SunandBall";
import SpotButton from "./components/SpotButton";
import RollingBox from "./components/RollingBox";
import { SP } from "next/dist/shared/lib/utils";
import StackingCards from "./components/StackingCards";
import DayNight from "./components/DayNight";
import ParallaxBg from "./components/ParallaxBg";
import DragCircle from "./components/DragCircle";
import HorizontalScrol from "./components/HorizontalScrol";
import { FadeUpStagger } from "./components/FadeupText";
import CenterContent from "./components/CenterContent";
import SlidingNav from "./components/layoutAnimations/SlidingNav";
import SmoothButton from "./components/layoutAnimations/LoadingButton";
import MoveToTrash from "./components/layoutAnimations/MoveToTrash";
import ChatBubble from "./components/layoutAnimations/ChatBubble";

const Page = () => {
  const { scrollY } = useScroll();
  // const animateControlNav = useAnimationControls();
  const [hidden, sethidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    let previous = scrollY.getPrevious();
    if ( previous < latest ) {
      sethidden(true)
    } else {
      sethidden(false)
    }
  });
  return (
    <div className="min-h-screen  ">
        <p className="font-serif">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis rem quidem, rerum quasi magnam iste ad dolore consectetur at earum minus harum eligendi incidunt possimus, aperiam, officia aut ratione eum!</p>
        <ChatBubble/>
        <MoveToTrash/>
        <SmoothButton/>
        <SlidingNav/>
      {/* <CenterContent/> */}
       {/* <motion.nav
        animate={hidden ? 'hidden' : 'visible'}
        variants={{ visible: { y: 0  }, hidden: { y: "-100%" } }}
        className="flex justify-between bg-slate-900 sticky top-0  w-full z-100"
      >
        <h1 className="font-bold text-lg p-3 bg-teal-500">Logo</h1>
        <div className="flex items-center ">
          <Link href={"/"}>Home</Link>
          <Link href={"/animations"}>Animations</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
        </div>
      </motion.nav> */}
      <FadeUpStagger/>
      <ParallaxBg/>
      <HorizontalScrol/>

     <DragCircle/>
      {/* <Link
        href={"/"}
        className="fixed z-10 top-3 left-3 ring-blue-300 rounded-full px-4 py-1 ring-2 flex-center"
      >
        Back
      </Link> */}

      <OpenSquare />

      {/* <SunandBall /> */}

      <RollingBox />
      <Space />
      <StackingCards/>
      <DayNight/>

      {/* <SpotButton /> */}
    </div>
  );
};

export default Page;
