import { createReducer } from '@reduxjs/toolkit';
import {
    fetchCitiesAsync,
    setFilterAsync, 
} from '../actions/citiesActions';

const initialState = {
    cities: [],
    loading: false,
    error: null,
    filter: '',
};

const citiesReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchCitiesAsync.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCitiesAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.cities = action.payload;
        })
        .addCase(fetchCitiesAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(setFilterAsync.fulfilled, (state, action) => {
            state.filter = action.payload;
        });
});

export default citiesReducer;




