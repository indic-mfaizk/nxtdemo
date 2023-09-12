import { CircularProgress, Container } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress
        color="secondary"
        sx={{ height: "300px", width: "100%" }}
      />
    </Container>
  );
};

export default loading;
