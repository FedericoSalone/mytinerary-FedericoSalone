import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCitiesAsync = createAsyncThunk(
    'cities/fetchCities',
    async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/cities');
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

export const setFilterAsync = createAsyncThunk(
    'cities/setFilter',
    async (filter) => {
        return filter;
    }
);


