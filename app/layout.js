"use client";
import Footer from "./component/footer";
import NavBar from "./component/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource-variable/oxanium";
import { CircularProgress, CssBaseline } from "@mui/material";
import "animate.css";
import { useTheme } from "@emotion/react";
import { DarkTheme, LightTheme } from "./utils/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { ThemeConst } from "./utils/const/const";
import { ThemeStore } from "./store/store";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", ThemeConst.DARK);
      setTheme(ThemeConst.DARK);
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeStore.Provider value={{ theme, setTheme }}>
          <ThemeProvider
            theme={theme == ThemeConst.DARK ? DarkTheme : LightTheme}
          >
            <CssBaseline />
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </ThemeStore.Provider>
      </body>
    </html>
  );
}
