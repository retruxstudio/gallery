"use client";
import Item from "@/components/Card";
import { MotionBox } from "@/components/motions/Motion";
import { Box, Flex } from "@chakra-ui/react";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });

  return (
    <Flex w="100vw" h="5000px" bg="#141414">
      <MotionBox
        className="cards_container"
        w="100%"
        px="220px"
        pt="140vh"
        overflow="hidden"
      >
        <Flex w="100%" justifyContent="space-between">
          <Item
            bgImage="/images/fals.png"
            bgSize="contain"
            bgRepeat="no-repeat"
          ></Item>
          <Box mt="300px" >
            <Item  bgImage="/images/lals.png"
            bgSize="contain"
            bgRepeat="no-repeat"></Item>
          </Box>
        </Flex>
        <Flex w="100%" justifyContent="space-between">
          <Box ml="50px" mt="-50px">
            <Item
              bgImage="/images/bells.png"
              bgSize="contain"
              bgRepeat="no-repeat"
            ></Item>
          </Box>
          <Box mt="300px">
            <Item   bgImage="/images/fiks.png"
              bgSize="contain"
              bgRepeat="no-repeat"></Item>
          </Box>
        </Flex>
        <Flex w="100%" justifyContent="space-between">
          <Box ml="-160px" mt="-70px">
            <Item   bgImage="/images/profilepicmine.jpg"
              bgSize="contain"
              bgRepeat="no-repeat"></Item>
          </Box>
          <Box mt="300px" mr="30px">
            <Item></Item>
          </Box>
        </Flex>
      </MotionBox>
    </Flex>
  );
}
