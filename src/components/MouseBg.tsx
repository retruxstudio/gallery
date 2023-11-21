"use client";

import { useFollowPointer } from "@/utils/GetMouse";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import { MotionBox } from "./motions/Motion";
import { easeInOut, easeOut } from "framer-motion";

export default function MouseBg() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <MotionBox
      ref={ref}
      className="hero"
      width="150vw"
      height="150vw"
      zIndex="-10"
      pos="fixed"
      top="-20vw"
      borderRadius="50%"
      bg="radial-gradient(50% 50% at 50% 50%, #6986f873 1%, #6c90f94D 16%, #74b0fc0A 65%, #00FFFF00 100%)"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0.4, 1], scale: 1, x: x, y: y }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        opacity: {
          duration: 1.2,
          ease: easeInOut,
          delay: 0.1,
        },
        scale: {
          duration: 1.2,
          ease: easeInOut,
          delay: 0.1,
        },
        x: {
          damping: 300,
          easing: easeOut,
        },
        y: {
          damping: 300,
          easing: easeOut,
        },
      }}
    ></MotionBox>
  );
}
