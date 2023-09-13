"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../assets/NavBarAssets/Logo.svg";
import eco from "../assets/NavBarAssets/eco.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ThemeStore } from "../store/store";
import { ThemeConst } from "../utils/const/const";
import { Switch } from "@mui/material";
import { ThemeContext } from "@emotion/react";
function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLight, setisLight] = React.useState(false);
  const pages =
    pathname != "/"
      ? [
          "Explorer",
          "NFT Marketplace",
          "Crypto Exchange",
          "ICO Dashboard",
          "P2E Game",
          "Bridge",
        ]
      : ["Docs", "Faqs", "Terms and Services", "Eco System"];
  // console.log(pages);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { theme, setTheme } = React.useContext(ThemeStore);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navClickHandler = (p) => {
    if (p == "Terms and Services") {
      router.push("/privacy");
      console.log("Pushed");
    } else if (p == "home") {
      router.push("/");
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: (theme) => theme.palette.appbar.main,
        // bgcolor: "appbar.main",
        pb: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src={logo}
              alt=""
              style={styles.logo}
              onClick={() => {
                navClickHandler("home");
              }}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              //   bgcolor: "blue",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                zIndex: "100",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={(e) => {
                    handleCloseNavMenu(e);
                    navClickHandler(page);
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Switch
                  onChange={(e) => {
                    setTheme((e) =>
                      e == ThemeConst.DARK ? ThemeConst.LIGHT : ThemeConst.DARK
                    );
                    theme == ThemeConst.LIGHT
                      ? localStorage.setItem("theme", ThemeConst.DARK)
                      : localStorage.setItem("theme", ThemeConst.LIGHT);
                  }}
                />
              </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src={logo}
              alt=""
              style={styles.logo}
              onClick={() => {
                navClickHandler("home");
              }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) =>
              page === "Eco System" ? (
                <></>
              ) : (
                <Button
                  key={page}
                  onClick={(e) => {
                    handleCloseNavMenu(e);
                    navClickHandler(page);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              )
            )}

            <Button
              onClick={(e) => {
                setTheme((e) =>
                  e == ThemeConst.DARK ? ThemeConst.LIGHT : ThemeConst.DARK
                );
                theme == ThemeConst.LIGHT
                  ? localStorage.setItem("theme", ThemeConst.DARK)
                  : localStorage.setItem("theme", ThemeConst.LIGHT);
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Theme Toggle
            </Button>
            <Button sx={{ bgcolor: "#a6482f", textAlign: "center", ml: 3 }}>
              <Image src={eco} alt="" style={styles.ecoButton} />
              <Typography
                variant="button"
                color={"white"}
                px={"10px"}
                fontFamily={"sora"}
                fontWeight={"400"}
                onClick={(e) => {
                  handleCloseNavMenu(e);
                  navClickHandler("eco system");
                }}
              >
                Eco System
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

const styles = {
  logo: {
    width: "130px",
  },
  ecoButton: {
    height: "20px",
  },
};
