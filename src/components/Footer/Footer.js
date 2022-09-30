import { Box, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import dataContext from "../../context/dataContext";

const Footer = () => {
  const {weather} = useContext(dataContext)
  return (
    <Box
      elevation={1}
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          px: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:'rgba(230,230,230,0.6)'
        }}
      >
        <Box>
          <Typography sx={{color:'white', fontSize: "bold" }}>{weather?.main?.humidity}%</Typography>
          <Typography sx={{color:'white',}}>Humidity</Typography>
        </Box>
        <Box sx={{ mx: 10 }}>
          <Typography sx={{color:'white', fontSize: "bold" }}>{weather?.main?.feels_like}F</Typography>
          <Typography sx={{color:'white',}}>Feels Like</Typography>
        </Box>
        <Box>
          <Typography sx={{ color:'white',fontSize: "bold" }}>{weather?.wind?.speed}MPH</Typography>
          <Typography sx={{color:'white',}}>Wind speed</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
