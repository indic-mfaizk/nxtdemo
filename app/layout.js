import Footer from "./component/footer";
import NavBar from "./component/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource-variable/sora";
import "@fontsource-variable/inter";
import "@fontsource-variable/oxanium";
import { CssBaseline } from "@mui/material";
import "animate.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fierex",
  description: "Generated next gen coin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
