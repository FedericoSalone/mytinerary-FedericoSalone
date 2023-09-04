
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCityDetailsAsync = createAsyncThunk(
    'cityDetails/fetchCityDetails',
    async (id) => {
        try {
            const [cityResponse, itinerariesResponse] = await Promise.all([
                axios.get(`http://localhost:3000/api/cities/${id}`),
                axios.get(`http://localhost:3000/api/itineraries/${id}`)
            ]);

            const cityData = cityResponse.data;
            const itineraries = itinerariesResponse.data;

            return { cityData, itineraries };
        } catch (error) {
            throw new Error(error.message);
        }
    }
);


