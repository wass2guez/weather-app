import { Box, CircularProgress, InputBase } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import dataContext from "../../context/dataContext";

const SearchInput = () => {
  //const [loading, setLoading] = useState(false);
  const { setWeather , loading , setLoading } = useContext(dataContext);
  const getWeather = async (cityName) => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e515941d713c5db414eda05d38cab32`
      );
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  let delayTimer = null;

  const handleChange = (event) => {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      getWeather(event.target.value);
    }, 500);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <InputBase
        sx={{
          position: "absolute",
          right: "50%",
          top: "20px",
          transform: "translate(50%)",
          border: "0.5px solid gray",
          borderRadius: "30px",
          height: "35px",
          p: 1,
          color: "white",
        }}
        placeholder="Enter your location"
        onChange={handleChange}
      />
      
    </Box>
  );
};

export default SearchInput;
