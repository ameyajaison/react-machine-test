import { configureStore } from "@reduxjs/toolkit";
//import countryReducer from "../features/countries/countrySlice";
import countryReducer from '../components/countries/countrySlice'
export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});
