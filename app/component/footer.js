"use client";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import fLogo from "../assets/LandingPageAssets/fieresLogo.png";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      {/* footer-start */}
      <Grid
        container
        sx={{
          background: (theme) => theme.palette.footer.main,
          // minWidth: "100dvw",

          py: "20px",
          //   mt: "50px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: "footer.main",
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
              bgcolor: "footer.main",
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
                bgcolor: "footer.main",
                width: "180px",
              }}
            >
              <Box component={Image} src={fLogo} />
              <Typography
                fontFamily={"goodtimes"}
                color="text.main"
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
              color={"text.semitransparent"}
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
              bgcolor: "footer.main",
              height: { lg: "300px", xs: "auto" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button sx={{ width: "fit-content" }}>
              <Typography sx={{ color: "text.primary", fontWeight: "800" }}>
                Quick Links
              </Typography>
            </Button>
            <Button
              sx={{ width: "fit-content" }}
              onClick={() => router.push("/")}
            >
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: "400",
                  opacity: "80%",
                }}
              >
                Home
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: "400",
                  opacity: "80%",
                }}
              >
                Docs
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: "400",
                  opacity: "80%",
                }}
              >
                FAQs
              </Typography>
            </Button>
            <Button
              sx={{ width: "fit-content" }}
              onClick={() => router.push("privacy")}
            >
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: "400",
                  opacity: "80%",
                }}
              >
                Terms & Condition
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              // width: { lg: "33.3%", xs: "100%" },
              bgcolor: "footer.main",
              height: { lg: "300px", xs: "auto" },
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
              // textAlign: "left",
            }}
          >
            <Button sx={{ width: "fit-content" }}>
              <Typography sx={{ color: "text.main", fontWeight: "800" }}>
                Contact Us
              </Typography>
            </Button>
            <Button sx={{ width: "fit-content" }}>
              <Typography
                sx={{ color: "text.main", fontWeight: "400", opacity: "80%" }}
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
                  bgcolor: (theme) => theme.palette.icon.main,
                }}
              />
              <TelegramIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: (theme) => theme.palette.icon.main,
                }}
              />
              <FacebookIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: (theme) => theme.palette.icon.main,
                }}
              />
              <YouTubeIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: (theme) => theme.palette.icon.main,
                }}
              />
              <LinkedInIcon
                sx={{
                  color: "rgba(255, 255, 255, 0.25)",
                  height: "35px",
                  width: "35px",
                  borderRadius: "35px",
                  p: "7px",
                  bgcolor: (theme) => theme.palette.icon.main,
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
          background: (theme) => theme.palette.footer.main,
          // minWidth: "100dvw",

          py: "20px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: "footer.main",
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
          <Typography
            fontFamily={"sora"}
            fontSize={"12px"}
            color={"text.primary"}
          >
            © 2023 Fieres All Rights Reserved
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="text" onClick={() => router.push("/privacy")}>
              <Typography
                fontFamily={"sora"}
                fontSize={"12px"}
                color={"text.primary"}
              >
                Privacy Policy
              </Typography>
            </Button>
            <Button variant="text" onClick={() => router.push("/disclaimer")}>
              <Typography
                fontFamily={"sora"}
                fontSize={"12px"}
                color={"text.primary"}
              >
                Token Disclaimer
              </Typography>
            </Button>
          </Box>
        </Container>
      </Grid>
      {/* privacy-end */}
    </>
  );
};

export default Footer;
