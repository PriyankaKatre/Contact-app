import {combineReducers} from "redux";
import * as contactReducer from '../redux/contactApp/contactapp.reducer';

const rootReducer = combineReducers({
    [contactReducer.contactAppFeatureKey]: contactReducer.reducer
});

export {rootReducer}
