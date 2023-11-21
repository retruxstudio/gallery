import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const breakpoints = {
  s: "474px",
  a: "639px",
  m: "767px",
  t: "1023px",
  d: "1179px",
  x: "1339px",
  w: "1419px",
};

const theme = extendTheme({
  breakpoints,
  config,
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "white" : "#141414",
      },
    }),
  },
  components: {},
});

export default theme;
