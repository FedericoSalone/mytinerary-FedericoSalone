import { createReducer } from '@reduxjs/toolkit';
import { fetchCityDetailsAsync } from '../actions/citiesDetailsActions';

const initialState = {
    itineraries: [],
    loading: false,
    error: null,
};

const itinerariesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCityDetailsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCityDetailsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.itineraries = action.payload.itineraries;
        })
        .addCase(fetchCityDetailsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
});

export default itinerariesReducer;


