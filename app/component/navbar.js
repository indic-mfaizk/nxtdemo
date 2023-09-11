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
function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
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

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log("Open");
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
    <Container maxWidth="xl">
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #160a13,#220d29,#1d0c20)",
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
              <img src={logo} alt="" style={styles.logo} />
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
              <Button sx={{ bgcolor: "#a6482f", textAlign: "center", ml: 3 }}>
                <img src={eco} alt="" style={styles.ecoButton} />
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
    </Container>
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
