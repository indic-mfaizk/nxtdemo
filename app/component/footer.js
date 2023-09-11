import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import fLogo from "../assets/LandingPageAssets/fieresLogo.png";

const Footer = () => {
  return (
    <>
      {/* footer-start */}
      <Grid
        container
        sx={{
          background: "#12050e",
          // minWidth: "100dvw",

          py: "20px",
          //   mt: "50px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: "#12050e",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // flexDirection: { lg: "row", xs: "column-reverse" },
            flexWrap: { lg: "nowrap", xs: "wrap" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: { lg: "33.3%", xs: "100%" },
              bgcolor: "#12050e",
              height: { lg: "300px", xs: "auto" },
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                bgcolor: "#12050e",
                width: "180px",
              }}
            >
              <Box component={Image} src={fLogo} />
              <Typography
                fontFamily={"goodtimes"}
                color="white"
                fontSize={"20px"}
                sx={{
                  background:
                    "linear-gradient(93deg, #FFB000 -20.75%, #FF564D 11.84%, #FF0098 53.76%, #5D00C1 102.96%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                FIERES
              </Typography>
            </Box>
            <Typography
              color={"rgba(255, 255, 255, 0.60)"}
              fontFamily={"sora"}
              fontWeight={"400"}
              fontSize={"14px"}
              sx={{ width: { xs: "auto", lg: "300px" } }}
            >
              Decentralizing and democratizing education to build the most
              interactive, immersive and insightful education metaverse, ever!
            </Typography>
          </Box>
          <Box
            sx={{
              width: { lg: "33.3%", xs: "100%" },
              bgcolor: "#12050e",
              height: { lg: "300px", xs: "auto" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button sx={{ width: "fit-content" }}>
              <Typography sx={{ color: "white", fontWeight: "800" }}>
                Quick Links
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
              >
                Home
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
              >
                Docs
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
              >
                FAQs
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
              >
                Terms & Condition
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              // width: { lg: "33.3%", xs: "100%" },
              bgcolor: "#12050e",
              height: { lg: "300px", xs: "auto" },
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              // textAlign: "left",
            }}
          >
            <Button sx={{ width: "fit-content" }}>
              <Typography sx={{ color: "white", fontWeight: "800" }}>
                Contact Us
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{ color: "white", fontWeight: "400", opacity: "80%" }}
              >
                Contact@fieres.com
              </Typography>
            </Button>
            <Box sx={{ pt: "10px", gap: "10px", display: "flex" }}>
              <TwitterIcon
                sx={{
                  color: "#ff26b6",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: "#1e111a",
                }}
              />
              <TelegramIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: "#1e111a",
                }}
              />
              <FacebookIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: "#1e111a",
                }}
              />
              <YouTubeIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: "#1e111a",
                }}
              />
              <LinkedInIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: "#1e111a",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Grid>
      {/* footer-end */}
      {/* privacy-start */}
      <Grid
        container
        sx={{
          background: "#12050e",
          // minWidth: "100dvw",

          py: "20px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: "#12050e",
            display: "flex",
            justifyContent: { lg: "space-between", xs: "center" },
            alignItems: "center",
            // flexDirection: { lg: "row", xs: "column-reverse" },
            flexWrap: { lg: "nowrap", xs: "wrap" },
            gap: "10px",
            borderTop: "1px",
            borderTopColor: "rgba(255, 255, 255, 0.03)",
            borderTopStyle: "solid",
            pt: "10px",
          }}
        >
          <Typography fontFamily={"sora"} fontSize={"12px"} color={"white"}>
            © 2023 Fieres All Rights Reserved
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography fontFamily={"sora"} fontSize={"12px"} color={"white"}>
              Privacy Policy
            </Typography>
            <Typography fontFamily={"sora"} fontSize={"12px"} color={"white"}>
              Token Disclaimer
            </Typography>
          </Box>
        </Container>
      </Grid>
      {/* privacy-end */}
    </>
  );
};

export default Footer;
