import { combineReducers } from 'redux';
import citiesReducer from './citiesReducers';
import cityDetailsReducer from './citiesDetailsReducers';
import itinerariesReducer from './itinerariesReducers';
import userReducer from './userReducers'; 

const rootReducer = combineReducers({
    cities: citiesReducer,
    cityDetails: cityDetailsReducer,
    itineraries: itinerariesReducer,
    user: userReducer, 
});

export default rootReducer;


