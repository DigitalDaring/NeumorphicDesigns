import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { AppState } from './app-state';
import { outputReducer, initialOutputState } from './output-reducers';

const rootReducer = combineReducers({
    output: outputReducer
});

const initialAppState = {
    output: initialOutputState
}

const middleware = applyMiddleware(logger);

export const store = createStore(rootReducer, initialAppState, middleware);
export type RootState = ReturnType<typeof rootReducer>;