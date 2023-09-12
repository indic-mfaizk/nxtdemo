import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d0109",
      sec: "#190d15",
      transparent: "rgba(255, 255, 255, 0.03)",
    },
    // secondary: {
    //   main: orange["700"],
    // },
    text: {
      main: "#ffffff",
      secondary: "#111111",
      semitransparent: "rgba(255, 255, 255, 0.60)",
    },
    button: {
      main: "linear-gradient(90deg ,#FF6F37, #FF2676, #B801AA, #7101BC)",
      sec: "#1a0b11",
    },
    background: {
      primary: "#150715",
      sec: "#180b17",
      ter: "#180b18",
      fourth: "#13060e",
      fifth: "#140710",
      sixth: "#210b18",
      seventh: "#170b14",
      eight: "#160a14",
    },
  },
});
export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#CAD5E2",
      sec: "rgba(0, 0, 0, 0.1)",
      transparent: "rgba(0, 0, 0, 0.03)",
    },
    // secondary: {
    //   main: "#FFA500", // Orange secondary color
    // },
    text: {
      main: "#242B2E",
      secondary: "#FFFFFF",
      semitransparent: "rgba(0, 0, 0, 0.60)",
    },
    button: {
      main: "linear-gradient(90deg, #FFA500, #FF6347, #FF4500, #FF8C00)",
      sec: "#EFEFEF",
    },
    background: {
      primary: "#F5F5F5",
      sec: "#EDEDED",
      ter: "#EFEFEF",
      fourth: "#FAFAFA",
      fifth: "#F8F8F8",
      sixth: "#FFFFFF",
      seventh: "#F0F0F0",
      eight: "#F1F1F1",
    },
  },
});
