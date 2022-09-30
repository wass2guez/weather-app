import { createContext } from "react";

export default createContext({
  weather: {},
  setWeather: () => {},
  loading : false,
  setLoading : ()=> {}
});