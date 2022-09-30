import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useContext } from "react";
import dataContext from "../../context/dataContext";

const Middle = () => {
  const { weather , loading , setLoading } = useContext(dataContext);
  console.log(weather);
  return (
    <Box
      sx={{
        height: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
     { (weather.name && !loading) ? <Typography
        variant="h5"
        sx={{
          color: "white",
          ml: "10px",
        }}
      >
        {weather.name}
      </Typography> : <CircularProgress />}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            color: "white",
          }}
        >
          {Math.floor(weather?.main?.temp - 273)}°C
        </Typography>
       { weather.weather ? <Typography
          variant="h6"
          sx={{
            color: "white",
            transform: "rotate(-90deg)",
          }}
        >
          {weather.weather[0].description}
        </Typography> : null}
      </Box>
    </Box>
  );
};

export default Middle;
