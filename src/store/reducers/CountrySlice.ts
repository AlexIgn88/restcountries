import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Country, CountryState } from "../../types";
import { fetchCountries } from "../reducers/ActionCreators";

const initialState: CountryState = {
    countries: [],
    isLoading: false,
    error: '',
}

export const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCountries.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCountries.fulfilled.type, (state, action: PayloadAction<Country[]>) => {
                state.isLoading = false;
                state.error = '';
                state.countries = action.payload;
            })
            .addCase(fetchCountries.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
})

export const { } = CountrySlice.actions;

export default CountrySlice.reducer;