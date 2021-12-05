import { combineReducers } from 'redux';

import { authReducer } from './auth';

const allReducers = combineReducers(
    {
        userData : authReducer
    }
)

export default allReducers;