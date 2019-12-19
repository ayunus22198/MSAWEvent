import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

// import reducers
import userReducer from './UserReducer';
import scheduleReducer from './ScheduleReducer';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const AppReducers = combineReducers({
    user: userReducer,
    schedule: scheduleReducer,
});

export default store = createStore(AppReducers, initialState, compose(applyMiddleware(...middleware)));
