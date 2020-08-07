import { combineReducers } from 'redux';
import mainScreen from './mainScreenReducer';
import photoScreen from './photoScreenReducer';

const rootReducer = combineReducers({
    mainScreen,
    photoScreen,
});

export default rootReducer;
