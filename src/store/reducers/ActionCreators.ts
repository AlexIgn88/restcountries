import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types";

export const fetchCountries = createAsyncThunk(
    'country/fetchAll',
    async (_, thunkAPI) => {
        const PATH = 'https://restcountries.com/v3.1/all';
        try {
            const response = await fetch(PATH);
            const data: Country[] = await response.json();
            return data;
        } catch (err: any) {
            return thunkAPI.rejectWithValue(`${err.message}: information could not be uploaded`);
        }
    }
)