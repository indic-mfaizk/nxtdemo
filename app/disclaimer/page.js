import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <Grid sx={{ bgcolor: "#0b0007" }}>
      <Container maxWidth="xl" sx={{ bgcolor: "#0b0007" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            py: "60px",
          }}
        >
          <Typography
            variant="h2"
            color={"white"}
            fontFamily={"goodtimes"}
            fontSize={"26px"}
          >
            Token Disclaimer
          </Typography>
          <Typography
            color={"rgba(255, 255, 255, 0.70)"}
            fontFamily={"sora"}
            fontSize={"12px"}
          >
            Investing in cryptocurrencies or tokens carries significant risks
            and may not be suitable for everyone. The value of cryptocurrencies
            and tokens can fluctuate widely and can result in significant losses
            or gains. It is essential to conduct your research, assess your risk
            tolerance, and seek professional advice before investing in
            cryptocurrencies or tokens. Moreover, please note that the
            cryptocurrency market is largely unregulated, and there is a risk of
            fraud, scams, and hacking. Therefore, it is essential to exercise
            caution and do your due diligence before engaging in any
            cryptocurrency-related transactions. In addition, please be aware
            that cryptocurrencies and tokens may be subject to significant price
            volatility and liquidity risks. The prices of cryptocurrencies and
            tokens can be affected by various factors, including market
            sentiment, regulatory changes, and technological advancements.
            Therefore, there is a risk that the value of a cryptocurrency or
            token may decline rapidly, resulting in significant losses for
            investors. Lastly, please be aware that the information provided on
            cryptocurrencies and tokens may not always be up-to-date or accurate
            and cannot guarantee the accuracy or completeness of the
            information. Therefore, it is always advisable to verify any
            information with other sources and seek professional advice before
            making any investment decisions.
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
};

export default Page;
