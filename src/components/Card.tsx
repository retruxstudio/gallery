import React, { Key, ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { MotionBox } from "./motions/Motion";
import { Box, BoxProps, Text } from "@chakra-ui/react";

interface TiltCardInterface extends BoxProps {
  children?: ReactNode;
  cardProps?: BoxProps;
}

export default function Item({ children, ...cardProps }: TiltCardInterface) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-170px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const springConfig = {
    stiffness: 460,
    damping: 36,
    mass: 0.5,
  };

  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const xSpring = useSpring(cardX, springConfig);
  const ySpring = useSpring(cardY, springConfig);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [3.2, -3.2]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-3.2, 3.2]);
  const cardRotateX = useTransform(ySpring, [-0.5, 0.5], [3.2, -3.2]);
  1;
  const cardRotateY = useTransform(xSpring, [-0.5, 0.5], [-3.2, 3.2]);
  1;

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    cardX.set(xPct);
    cardY.set(yPct);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
      }}
    >
      <MotionBox
        style={{
          width: 550,
          height: 550,
          transformStyle: "preserve-3d",
          perspective: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rotateX,
          rotateY,
          position: "relative",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <MotionBox
          style={{
            backgroundColor: "blue",
            position: "absolute",
            width: 550,
            height: 550,
            transformStyle: "preserve-3d",
            perspective: 800,
            rotateX: cardRotateX,
            rotateY: cardRotateY,
          }}
          {...cardProps}
        >
          {children}
        </MotionBox>
      </MotionBox>
    </motion.div>
  );
}
