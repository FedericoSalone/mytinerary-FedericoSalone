import { createReducer } from '@reduxjs/toolkit';
import { fetchCityDetailsAsync } from '../actions/citiesDetailsActions';

const initialState = {
    cityData: null,
    loading: false,
    error: null,
};

const cityDetailsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCityDetailsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCityDetailsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.cityData = action.payload.cityData;
        })
        .addCase(fetchCityDetailsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
});

export default cityDetailsReducer;



