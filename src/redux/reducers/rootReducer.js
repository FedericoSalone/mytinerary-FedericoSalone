import { combineReducers } from 'redux';
import citiesReducer from './citiesReducers';
import cityDetailsReducer from './citiesDetailsReducers';
import itinerariesReducer from './itinerariesReducers';

const rootReducer = combineReducers({
    cities: citiesReducer,
    cityDetails: cityDetailsReducer,
    itineraries: itinerariesReducer,
});

export default rootReducer;

