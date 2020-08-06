import { combineReducers } from 'redux';
import photosArr from './photosArrReducer';

const rootReducer = combineReducers({
    photosArr,
});

export default rootReducer;
