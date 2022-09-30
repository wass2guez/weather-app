import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import SearchInput from "./components/SearchInput";
import Middle from "./components/Middle";
import img from "./assets/19cover.jpg.crdownload";
import theme from "./assets/theme/theme";
import Footer from "./components/Footer";
import { useState } from "react";
import DataContext from "./context/dataContext";

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={{setWeather , weather , loading , setLoading }}>
        <Box
          sx={{
            overflow: "hidden",
            height: "100vh",
            background: `url(${img}) no-repeat center/cover`,
          }}
        >
          <CssBaseline />
          <SearchInput />
          <Middle />
          <Footer />
        </Box>
      </DataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
