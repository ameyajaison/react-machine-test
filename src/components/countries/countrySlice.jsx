import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://restcountries.com/v2/all?fields=name,region,flag";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    all: [],
    visibleCount: 12,
    status: "idle",
    error: null,
    selectedRegion: "All",
  },
  reducers: {
    loadMore: (state) => {
      state.visibleCount += 12;
    },
     setRegion: (state, action) => {
    state.selectedRegion = action.payload;
    state.visibleCount = 12; // reset on region change
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadMore,setRegion  } = countrySlice.actions;

export default countrySlice.reducer;
